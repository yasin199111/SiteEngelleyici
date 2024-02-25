document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('saveBtn');
    const savedDuolingoPuan = document.getElementById('savedDuolingoPuan');
    const savedOnSonEtkilesim = document.getElementById('savedOnSonEtkilesim');
    const savedapiURL = document.getElementById('savedapiURL');


  // Verileri görüntülemek için fonksiyon
  function displaySavedData() {
    chrome.storage.sync.get(['siteUrls','duolingoPuan','onSonEtkilesim','apiURL'], function(result) {
      var newDate = new Date();
      newDate.setTime(result.onSonEtkilesim);
      dateString = newDate.toUTCString();
      savedDuolingoPuan.textContent = `Duolingo Puan: ${result.duolingoPuan || ''}`;
      savedOnSonEtkilesim.textContent = `Son Etkilesim: ${dateString || ''}`;
      siteUrls.textContent = `${result.siteUrls ? result.siteUrls.join('\n') : ''}`;
      apiURL.value   = `${result.apiURL}`;
    });
  }

   // Sayfa açıldığında kaydedilen verileri göster
   displaySavedData();
  
    saveBtn.addEventListener('click', function() {
      const apiURL = document.getElementById('apiURL').value;
      const siteUrls = document.getElementById('siteUrls').value.split('\n').filter(url => url.trim() !== '');
  
      chrome.storage.sync.set({ siteUrls, apiURL }, function() {
        console.log('Ayarlar kaydedildi.');
      });
    });
  });
  