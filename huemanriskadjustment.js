var newurl;
window.refURL = function(newurl) {
  console.log('external');
  if (newurl === undefined) {
    
  } else {
    window.history.pushState({path:newurl}, '', newurl + "&searchdropcity=AL$$Birmingham");
  }
  //var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.pathname.indexof;
  //if (!window.location.search.indexOf('searchdropcity=AL$$Birmingham') > -1) {
  //}
}
