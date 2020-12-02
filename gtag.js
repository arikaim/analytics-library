window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
var libraryScript = document.getElementById('library_analytics');
var trackingId = libraryScript.getAttribute('tracking-id');

gtag('config',trackingId);