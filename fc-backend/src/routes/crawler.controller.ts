import { ffFetchConfig } from "@config";
import { FFAddictPlayer } from "@model";
import { crawlFFData } from "@network";
import { FifaAddictPlayerSchema } from "@schema/FFAddict";
import { getFFApiString, getQueryParams } from "@utils";
import axios from "axios";
import express from "express";
import { Model } from "mongoose";

const Router = express.Router();

Router.get("/test", async (req, res) => {
  res.status(200);
  res.send({ tag: "tag test ok" });
});

Router.post("/crawl", async (req, res) => {
  try {
    const { hostname, paramsEntries } = getQueryParams(req.body.url);
    const apiString = getFFApiString(hostname, paramsEntries);
    const response = await crawlFFData(apiString);
    const data = response.data?.db;

    response.data?.db?.forEach(async (element) => {
      await new FifaAddictPlayerSchema(element).save();
    });

    console.log("resultList", data?.length);

    res.status(200);
    res.send({ data: data, length: data?.length });
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
    const pageIndex = parseInt(req.body.pageIndex as string) ?? 1;
    const pageSize = parseInt(req.query.pageSize as string) ?? 100;
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
    res.status(500);
    res.send({ message: "Error" });
  }
});

export default Router;
