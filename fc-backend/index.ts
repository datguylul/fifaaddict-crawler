require("module-alias/register");
require("dotenv").config();
import express from "express";
const app = express();
import cors from "cors";
import body_parser from "body-parser";
import { api } from "@routes";
import { mongooseConnect } from "@mongoose";

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use("/api", api);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  mongooseConnect();

  console.log(`running at: ${port}`);
});
