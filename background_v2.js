import duolingoApi from "./api/duolingoApi.js";

chrome.runtime.onInstalled.addListener((details) => {
  duolingoApi();
});

chrome.tabs.onActivated.addListener((e) => {
  duolingoApi();
});
