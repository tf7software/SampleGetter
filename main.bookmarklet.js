javascript:(function(){
  var ytUrl = window.location.href;
  if (!ytUrl.includes('youtube.com/watch')) {
    alert('This only works on YouTube video pages!');
    return;
  }

  var iframe = document.createElement('iframe');
  iframe.src = 'https://p.oceansaver.in/api/button2/?url=' + encodeURIComponent(ytUrl) + '&f=wav';
  iframe.style.width = '100%';
  iframe.style.height = '80px';
  iframe.style.border = 'none';
  iframe.style.margin = '10px 0';

  var desc = document.getElementById('description');
  if (desc && desc.parentNode) {
    desc.parentNode.insertBefore(iframe, desc);
  } else {
    var player = document.querySelector('#player') || document.querySelector('ytd-watch-flexy');
    if (player) {
      player.appendChild(iframe);
    } else {
      document.body.appendChild(iframe);
    }
  }
})();
