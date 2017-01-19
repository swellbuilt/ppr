console.log('external');

function processAjaxData(response, urlPath) {
  document.getElementById("content").innerHTML = response.html;
  document.title = response.pageTitle;
  window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath + "&searchdropcity=AL$$Birmingham");
}

//var myURL = document.location;
//if (!window.location.search.indexOf('searchdropcity=AL$$Birmingham') > -1) {
  //document.location = myURL + "&searchdropcity=AL$$Birmingham";
//}
