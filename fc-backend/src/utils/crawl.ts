import { FifaOnlinePlayer, Response } from "@model";
import axios from "axios";

const config = {
  method: "get",
  maxBodyLength: Infinity,
  headers: {
    Cookie:
      "XSRF-TOKEN=eyJpdiI6InpnUVN1Z3dcL2xyQmJITHhXNTdmYlNBPT0iLCJ2YWx1ZSI6ImZqQ25UaGV4YzBMcFhOTlR1MTBUY0o4Zkd6YVdib1krNkpYRFlrNG55aGo0VnlHcllvQ1dKZk00RHA3MHY4Y2ciLCJtYWMiOiI4YmMwZDc4YTNmMTI2NDVhYzIxNDE2M2U0NmI2M2MxNjQ5MWE4NWZjZmMyOTgzOGE4ZjFmNTk3OTY0NzM2MjRkIn0%3D; fo4s_session=eyJpdiI6IkVlcG9iSjdPTUNYalY1alI1TmFVMVE9PSIsInZhbHVlIjoiZHlQRE1rNnBwY1BOeDdneG0zbjNTT3JIYlRVU0hXWTMyalwvVHpMTHQyVzRHWWMrV000MVYwbU1MVkVvQlZWYzgiLCJtYWMiOiI3YzgxMzg3YjFjNTM1MmM1ZDRhOGQyYTMwZTQwM2M3YjcyZWU5NjYzMjRmMjdhY2M5ODI5YWUwNmM2NTVlNDlkIn0%3D",
  },
};

export const crawlData = (url: string): Promise<Response<FifaOnlinePlayer>> => {
  const encoded = encodeURIComponent(url);
  return axios.request({ ...config, url: encoded });
};

export function getQueryParams(qs: string) {
  // qs = qs.split("+").join(" ");
  // let params = {};
  // let tokens: RegExpExecArray | null = null,
  //   re = /[?&]?([^=]+)=([^&]*)/g;
  // while ((tokens = re.exec(qs))) {
  //   params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  // }
  // return params;
}
