var indeedScript = "<script type='text/javascript'>" +
"var indeed_conversion_id = '4552366420437082'; " +
"var indeed_conversion_label = '';" +
"</script>" +
"<script type='text/javascript' src='//conv.indeed.com/pagead/conversion.js'></script>" +
"<noscript>" +
"<img height=1 width=1 border=0 src='//conv.indeed.com/pagead/conv/4552366420437082/?script=0'>" +
"</noscript>";
  
var txtApplied = "Your application has been received."; 
jQuery(function($) {
	if ($('[id^=apply_jobapp]:contains(" + txtApplied + ")').length) {
    alert('Application received');
    var div = document.createElement('div');
    div.innerHTML = indeedScript;
    document.getElementsByTagName('body')[0].appendChild(div);
	}
});

