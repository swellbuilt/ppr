console.log('external');
var myURL = document.location;
if (!window.location.search.indexOf('searchdropcity=AL$$Birmingham') > -1) {
  document.location = myURL + "&searchdropcity=AL$$Birmingham";
}
