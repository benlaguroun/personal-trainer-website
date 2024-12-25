document.addEventListener("DOMContentLoaded", () => {
  const exerciseCards = document.querySelectorAll(".exercise-card");
  const videoPlayer = document.getElementById("video-player");
  const exerciseVideo = document.getElementById("exercise-video");
  const closeVideoButton = document.getElementById("close-video");

  exerciseCards.forEach((card) => {
    card.querySelector(".watch-button").addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      exerciseVideo.querySelector("source").src = videoSrc;
      exerciseVideo.load();
      videoPlayer.style.display = "flex";
    });
  });

  closeVideoButton.addEventListener("click", () => {
    videoPlayer.style.display = "none";
    exerciseVideo.pause();
  });
});
