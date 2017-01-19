console.log('external');

var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", newurl + "&searchdropcity=AL$$Birmingham");

//var myURL = document.location;
//if (!window.location.search.indexOf('searchdropcity=AL$$Birmingham') > -1) {
  //document.location = myURL + "&searchdropcity=AL$$Birmingham";
//}
