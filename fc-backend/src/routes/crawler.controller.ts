import { crawlData, getQueryParams } from "@utils";
import express from "express";

const Router = express.Router();

Router.get("/test", async (req, res) => {
  res.status(200);
  res.send({ tag: "tag test ok" });
});

const url = `https://fo4s.com/ajax?action=search_player&input={"pos":[],"class":[],"league":"","club":"","nation":"","team":"","trait":["","",""],"ig_trait":[],"attr":["","",""],"attr_value":[{},{},{}],"lfoot":"","rfoot":"","month":"","day":"","build":[],"skill":"","fame":"","sort":"ovr-desc","col1":"sprintspeed","col2":"stamina","col3":"strength","q":"h"}`;

Router.post("/crawl", async (req, res) => {
  try {
    const bodyUrl = decodeURIComponent(req.body.url);

    const url = new URL(bodyUrl);
    const urlParams = new URLSearchParams(url.search);

    // let params: Record<string, string> = {};
    // for (const entry of urlParams.entries()) {
    //   params[entry[0]] = entry[1];
    //   // params += `${entry[0]}=${entry[1]}&`;
    // }

    var search = url.search.substring(1);
    const params = JSON.parse(
      '{"' +
        decodeURI(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );

    res.status(200);
    res.send({ url: bodyUrl, hostname: url.hostname, params: params });

    // const response = await crawlData(url);

    // res.status(200);
    // res.send({ data: response.data?.data });
  } catch (error) {
    console.log("error", error);

    res.status(500);
    res.send({ message: "Error" });
  }
});

export default Router;
