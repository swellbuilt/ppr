var indeed_conversion_id = '4552366420437082';
var indeed_conversion_label = '';

function indeed_get_conv_url(label, redirect, script) {
  var w = window;
  var proto = w.location.protocol.toLowerCase();
  if ('http:' != proto && 'https:' != proto) {
    proto = 'http:';
  }
  var url = proto + '//conv.indeed.com' +
      '/pagead/conv/' + escape(w.indeed_conversion_id) +
      '/?rand=' + (new Date()).getTime();
  if (w.indeed_conversion_value) {
    url = url + '&value=' + escape(w.indeed_conversion_value);
  }
  if (label) {
    url = url + '&channel=' + escape(label);
  }
  if (w.indeed_conversion_count > 1) {
    url = url + '&count=' + w.indeed_conversion_count;
  }
  if (w.indeed_conversion_ia) {
    url = url + "&ia=1";
  }
  if (w.indeed_conversion_applied) {
    url = url + "&applyComplete=" + w.indeed_conversion_applied;
  }
  if (w.indeed_conversion_hired) {
    url = url + "&hired=" + w.indeed_conversion_hired;
  }
  if (w.indeed_conversion_candidate_id) {
    url = url + "&candidateId=" + w.indeed_conversion_candidate_id;
  }
  if (w.indeed_conversion_step) {
    url = url + "&step=" + w.indeed_conversion_step;
  }
  url = url + '&script=' + (script ? script : 0);
  if (redirect) {
    url = url + "&url=" + escape(redirect);
  }
  return url;
}

function indeed_handle_conversion() {
  var w = window;
  if (w.indeed_conversion_count) {
    w.indeed_conversion_count = w.indeed_conversion_count + 1;
  } else {
    w.indeed_conversion_count = 1;
  }
  if (w.indeed_conversion_id) {
    var url = indeed_get_conv_url(w.indeed_conversion_label, "", 1);
    document.write('<ifr' + 'ame name="indconv"' +
		     ' width="1" height="1" src="' + url + '"' +
		     ' frameborder="0" marginwidth="0" marginheight="0"' +
             ' vspace="0" hspace="0" allowtransparency="true"' +
             ' scrolling="no">');
    document.write('<i' + 'mg height="1" ' +
             'width="1" border="0" ' +
             'src="' + url + '&ifr' + 'ame=0" />');
    document.write('</ifr' + 'ame>');
  }
  w.indeed_conversion_id = null;
  w.indeed_conversion_value = null;
  w.indeed_conversion_label = null;
  w.indeed_conversion_ia = null;
}


var txtApplied = "Your application has been received."; 
jQuery(function($) {
  $("#searchpcr button[type=submit]").click(function() {
    console.log('Indeed Conversion Executed');
    indeed_handle_conversion();
  });
});

