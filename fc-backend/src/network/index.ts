import { ffFetchConfig, fo4sConfig } from "@config";
import {
  FFAddictIdsResponse,
  FFAddictPlayerDetail,
  FFResponse,
  FifaOnlinePlayer,
  FOResponse,
} from "@model";
import axios from "axios";

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
