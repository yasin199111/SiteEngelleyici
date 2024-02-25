export default function duolingoApi() {
  chrome.storage.sync.get(["apiURL"], function (result) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "GET");
    headers.append("Access-Control-Allow-Headers", "Content-Type");

    fetch(result.apiURL, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        PuanKaydet(data.totalXp);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

function PuanKaydet(totalXp) {
  const duolingoPuan = totalXp;
  const onSonEtkilesim = new Date().getTime();
  chrome.storage.sync.get(
    ["duolingoPuan", "onSonEtkilesim"],
    function (result) {
      const puan = result.duolingoPuan || 0;
      if (puan != duolingoPuan) {
        chrome.storage.sync.set({ duolingoPuan, onSonEtkilesim });
      }
    }
  );
}
