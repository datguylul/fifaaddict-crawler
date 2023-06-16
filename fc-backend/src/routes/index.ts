import express from "express";
const api = express.Router();

import crawler from "./crawler.controller";

api.use("/v1/crawler", crawler);

export { api };
