// navigation bar //

// video //

var aboutMeContainer = document.getElementById("about-me-container");
var video = document.getElementById("aboutMeVideo");
var montageBtn = document.getElementById("montageBtn");

function montageFunction() {
    if (video.paused) {
      aboutMeContainer.style.backgroundColor = "rgba(21, 21, 21, 0)";
      setTimeout(() => { video.play(); }, 0250);
      montageBtn.innerHTML = "Pause";
    } else {
      aboutMeContainer.style.backgroundColor = "rgba(21, 21, 21, 0.8)"
      setTimeout(() => { video.pause(); }, 0250);
      montageBtn.innerHTML = "Play";
    }
}