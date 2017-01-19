console.log('external');

//var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.pathname.indexof;
var newurl = window.location.href;
window.history.pushState({path:newurl}, '', newurl + "&searchdropcity=AL$$Birmingham");

//if (!window.location.search.indexOf('searchdropcity=AL$$Birmingham') > -1) {

//}
