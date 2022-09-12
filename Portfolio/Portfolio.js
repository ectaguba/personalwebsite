// navigation bar //

// video //
var video = document.getElementById("aboutMeVideo");
var btn = document.getElementById("montageBtn");

function montageFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause Background";
    } else {
      video.pause();
      btn.innerHTML = "Play Background";
    }
}