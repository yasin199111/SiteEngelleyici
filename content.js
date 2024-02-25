
chrome.storage.sync.get(['siteUrls','onSonEtkilesim'], function(result) {
    const siteUrls = result.siteUrls || [];
    const onSonEtkilesim = result.onSonEtkilesim || 0;

    var newDate = new Date();
    newDate.setTime(result.onSonEtkilesim);
  
    const currenttime = new Date();
    
    var farksure = currenttime.getHours() - newDate.getHours();

    const currentHostname = window.location.hostname;
  
    if ( farksure >= 0 && siteUrls.some(url => currentHostname.includes(url))) {
      alert('Son 1 saat içinde ingilizce pratik yapmadın !!!');
      window.location.href = 'https://tr.duolingo.com/learn'; 
    }


  });
  