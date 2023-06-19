import axios from "axios";

export const getQueryParams = (qs: string) => {
  const bodyUrl = decodeURIComponent(qs);

  const url = new URL(bodyUrl);
  const urlParams = new URLSearchParams(url.search);

  return { hostname: url.hostname, paramsEntries: urlParams.entries() };
};

export const getFFApiString = (
  hostname: string,
  entries: IterableIterator<[string, string]>
) => {
  let params = "";
  for (const entry of entries) {
    params += `${entry[0]}=${entry[1]}&`;
  }
  params.slice(0, -1);

  return `https://${hostname}/api2?q=fo4db&${params}`;
};
