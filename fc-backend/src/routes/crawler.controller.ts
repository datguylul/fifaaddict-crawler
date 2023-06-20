import { FFAddictDetailDB, FFAddictID } from "@model";
import { crawlFFData, crawlFFDetail } from "@network";
import {
  FifaAddictIDsSchema,
  FifaAddictPlayerSchema,
  FifaAddictDetailSchema,
} from "@schema";
import { getFFApiString, getQueryParams } from "@utils";
import express from "express";
import { isEmpty } from "lodash";

const Router = express.Router();

Router.get("/test", async (req, res) => {
  res.status(200);
  res.send({ tag: "tag test ok" });
});

Router.post("/crawl-ids", async (req, res) => {
  try {
    const { hostname, paramsEntries } = getQueryParams(req.body.url);
    const apiString = getFFApiString(hostname, paramsEntries);
    const response = await crawlFFData(apiString);
    const data = response.data?.db;

    let resultList: FFAddictID[] = [];
    for (let i = 0; i < (data?.length ?? 0); i++) {
      // const idCheck = await FifaAddictIDsSchema.findOne({ uid: data?.[i].uid });
      // if (!idCheck) {
      // }
      const result = await new FifaAddictIDsSchema(data?.[i]).save();
      resultList = [...resultList, result];
    }

    res.status(200);
    res.send({
      count: resultList.length,
      "source-length": data?.length,
      data: resultList,
    });
  } catch (error) {
    console.log("error", error);

    res.status(500);
    res.send({ message: "Error" });
  }
});

Router.post("/crawl-test", async (req, res) => {
  try {
    const { hostname, paramsEntries } = getQueryParams(req.body.url);
    const apiString = getFFApiString(hostname, paramsEntries);
    const response = await crawlFFData(apiString);
    const data = response.data?.db;
    res.status(200);
    res.send({ data: data, length: data?.length });
  } catch (error) {
    console.log("error", error);

    res.status(500);
    res.send({ message: "Error" });
  }
});

Router.get("/", async (req, res) => {
  try {
    const pageIndex = parseInt(req.query?.pageIndex as string) ?? 1;
    const pageSize = parseInt(req.query?.pageSize as string) ?? 100;
    const date_sort = req.query.date_sort || -1;

    const list = await FifaAddictPlayerSchema.find()
      .sort({ created_date: date_sort })
      .skip(pageIndex > 0 ? (pageIndex - 1) * pageSize : 0)
      .limit(pageSize);

    res.status(200);
    res.send({
      data: list,
      total: await FifaAddictPlayerSchema.countDocuments(),
    });
  } catch (error) {
    console.log("error", error);

    res.status(500);
    res.send({ message: "Error" });
  }
});

Router.get("/ids", async (req, res) => {
  try {
    const pageIndex = parseInt(req.query.pageIndex as string) ?? 1;
    const pageSize = parseInt(req.query.pageSize as string) ?? 100;
    const date_sort = req.query.date_sort || -1;

    const list = await FifaAddictIDsSchema.find()
      .sort({ created_date: date_sort })
      .skip(pageIndex > 0 ? (pageIndex - 1) * pageSize : 0)
      .limit(pageSize);

    res.status(200);
    res.send({
      data: list,
      total: await FifaAddictIDsSchema.countDocuments(),
    });
  } catch (error) {
    console.log("error", error);
    res.status(500);
    res.send({ message: "Error" });
  }
});

Router.delete("/ids", async (req, res) => {
  try {
    const list = await FifaAddictIDsSchema.deleteMany();

    res.status(200);
    res.send({ message: "Success" });
  } catch (error) {
    console.log("error", error);
    res.status(500);
    res.send({ message: "Error" });
  }
});

Router.post("/detail", async (req, res) => {
  try {
    const response = await crawlFFDetail(req.body.id);
    const data = response.data;

    if (isEmpty(data)) {
      res.status(400);
      res.send({
        message: "Data not found",
      });
      return;
    }

    const idCheck = await FifaAddictDetailSchema.findOne({ uid: req.body.id });
    if (idCheck) {
      res.status(400).send({ message: "Detail already exist" });
      return;
    }

    const params: FFAddictDetailDB = {
      uid: req.body.id,
      detail: JSON.stringify(data),
    };

    const result = await new FifaAddictDetailSchema(params).save();
    if (!result) return res.status(400).send({ message: "Fail" });

    res.status(200);
    res.send({
      data: result,
      message: "Success",
    });
  } catch (error) {
    console.log("error", error);

    res.status(500);
    res.send({ message: "Error" });
  }
});

Router.get("/detail", async (req, res) => {
  try {
    const pageIndex = parseInt(req.query.pageIndex as string) ?? 1;
    const pageSize = parseInt(req.query.pageSize as string) ?? 100;
    const date_sort = req.query.date_sort || -1;

    const list = await FifaAddictDetailSchema.find()
      .sort({ created_date: date_sort })
      .skip(pageIndex > 0 ? (pageIndex - 1) * pageSize : 0)
      .limit(pageSize);

    res.status(200);
    res.send({
      data: list,
      total: await FifaAddictDetailSchema.countDocuments(),
    });
  } catch (error) {
    console.log("error", error);

    res.status(500);
    res.send({ message: "Error" });
  }
});

Router.delete("/detail", async (req, res) => {
  try {
    const list = await FifaAddictDetailSchema.deleteMany();

    res.status(200);
    res.send({ message: "Success" });
  } catch (error) {
    console.log("error", error);

    res.status(500);
    res.send({ message: "Error" });
  }
});

export default Router;
