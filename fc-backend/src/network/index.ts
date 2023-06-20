import { ffFetchConfig, fo4sConfig } from "@config";
import {
  FFAddictDetailDB,
  FFAddictIdsResponse,
  FFAddictPlayerDetail,
  FFResponse,
  FifaOnlinePlayer,
  FOResponse,
  MongoChangeStream,
} from "@model";
import { FifaAddictDetailSchema } from "@schema";
import axios from "axios";
import { isEmpty } from "lodash";

export const crawlFO4Data = (
  url: string
): Promise<FOResponse<FifaOnlinePlayer>> => {
  const encoded = encodeURIComponent(url);
  return axios.request({ ...fo4sConfig, url: encoded });
};

export const crawlFFData = (
  url: string
): Promise<FFResponse<FFAddictIdsResponse>> => {
  return axios.request({ url: url, ...ffFetchConfig });
};

export const crawlFFDetail = (
  id: string
): Promise<FFResponse<FFAddictPlayerDetail>> => {
  return axios.request({
    url: `https://en.fifaaddict.com/api2?fo4pid=pid${id}&locale=en`,
    ...ffFetchConfig,
  });
};

export const mongooseInsertWatch = async (data: MongoChangeStream) => {
  if (data.operationType !== "insert") {
    return;
  }

  const uid = data.fullDocument?.uid;

  if (isEmpty(uid)) {
    return;
  }

  const response = await crawlFFDetail(uid ?? "");
  const resp = response.data;

  if (isEmpty(resp)) {
    return;
  }

  const idCheck = await FifaAddictDetailSchema.findOne({ uid: uid });
  if (idCheck) {
    return;
  }

  const params: FFAddictDetailDB = {
    uid: uid,
    detail: JSON.stringify(data),
  };

  const result = await new FifaAddictDetailSchema(params).save();
};
