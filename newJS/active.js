var activeurl = window.location.toString();
let active=activeurl.substring(activeurl.lastIndexOf('/')+1, activeurl.length)
$('a[href="'+active+'"]').parent('li').addClass('active');
