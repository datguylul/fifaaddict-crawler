chrome.tabs.onUpdated.addListener((id, change, tab) => {
  const url = tab.url;
  if (url !== undefined && change.status == "complete") {
    const hostName = new URL(url).hostname;
    if (hostName !== "en.fifaaddict.com") {
      return;
    }

    if (url?.includes("https://en.fifaaddict.com/fo4db/pid")) {
      return;
    }

    fetch("http://localhost:3000/api/v1/crawler/crawl-ids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: tab.url,
      }),
    })
      .then((response) => {
        console.log("response", response);
        return response.text();
      })
      .then((result) => {
        const data = JSON.parse(result);
        console.log(data.length);
      })
      .catch((error) => console.log("error", error));
  }
});
