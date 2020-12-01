window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
var libraryScript = document.getElementById('library_analytics');
var trackingId = libraryScript.getAttribute('tracking-id');

ga('create',trackingId,'auto');
ga('send','pageview');