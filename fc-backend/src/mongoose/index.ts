import mongoose from "mongoose";
import { MongoClient, ChangeStream } from "mongodb";
import { mongooseInsertWatch } from "@network";
const stream = require("stream");
const mongooseConnect = () => {
  console.log("MongooseDB connecting...");
  mongoose.connect(
    process.env.MONGO_URL ?? "",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) console.log("MongooseDB connect failed", err);
      else {
        console.log("MongooseDB connected");
        monitorListingsUsingEventEmitter();
      }
    }
  );
};

function closeChangeStream(timeInMs = 60000, changeStream: ChangeStream<any>) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      // console.log("Closing the change stream");
      // changeStream.close();
      resolve();
    }, timeInMs);
  });
}

async function monitorListingsUsingEventEmitter(pipeline = []) {
  const client = new MongoClient(process.env.MONGO_URL ?? "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    console.log("Connect to change stream");

    await client.connect();
    const collection = client.db("test").collection("ff-addict_ids");

    const changeStream = collection.watch(pipeline);

    try {
      console.log("Change stream listening...");
      while (await changeStream.hasNext()) {
        const data = await changeStream.next();

        void mongooseInsertWatch(data);
      }
    } catch (error) {
      if (changeStream.isClosed()) {
        console.log(
          "The change stream is closed. Will not wait on any more changes."
        );
      } else {
        throw error;
      }
    }

    await closeChangeStream(undefined, changeStream);
  } finally {
    await client.close();
  }
}

export { mongooseConnect };
