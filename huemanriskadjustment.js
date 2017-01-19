console.log('external');

if (history.pushState) {
  var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '&searchdropcity=AL$$Birmingham';
  window.history.pushState({path:newurl},'',newurl);
}
