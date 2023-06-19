chrome.tabs.onUpdated.addListener((id, change, tab) => {
  var url = tab.url;
  if (url !== undefined && change.status == "complete") {
    const hostName = new URL(tab.url).hostname;
    if (hostName !== "en.fifaaddict.com") {
      return;
    }

    fetch("http://localhost:3000/api/v1/crawler/crawl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: tab.url,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        console.log(data.length);
      })
      .catch((error) => console.log("error", error));
  }
});
