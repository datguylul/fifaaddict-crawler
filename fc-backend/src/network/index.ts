import { ffFetchConfig, fo4sConfig } from "@config";
import {
  FFAddictResponse,
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
): Promise<FFResponse<FFAddictResponse>> => {
  return axios.request({ url: url, ...ffFetchConfig });
};
