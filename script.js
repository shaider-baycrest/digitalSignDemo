const img = document.getElementById("slideshow");
const startBtn = document.getElementById("startBtn");

let imageList = [];
let index = 0;
let interval = null;
const delay = 5000;

function showNextImage() {
  if (imageList.length === 0) return;
  img.src = imageList[index];
  index = (index + 1) % imageList.length;
}

function startSlideshow() {
  document.body.requestFullscreen().catch(console.error);
  startBtn.style.display = "none";
  showNextImage();
  interval = setInterval(showNextImage, delay);
}

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    startBtn.style.display = "block";
    clearInterval(interval);
  }
});

startBtn.addEventListener("click", startSlideshow);

fetch("images.json", { cache: "no-store" })
  .then(res => res.json())
  .then(data => {
    imageList = data;
  })
  .catch(err => {
    console.error("Failed to load image list:", err);
  });


/* const imageList = [
    "./images/image1.png",
    "./images/image2.png",
    "./images/image3.png"
  ];
  
  let index = 0;
  const delay = 5000;
  const img = document.getElementById("slideshow");
  const startBtn = document.getElementById("startBtn");
  let interval = null;
  
  function showNextImage() {
    img.src = imageList[index];
    index = (index + 1) % imageList.length;
  }
  
  function startSlideshow() {
    document.body.requestFullscreen().catch(console.error);
    startBtn.style.display = "none";
    showNextImage();
    interval = setInterval(showNextImage, delay);
  }
  
  // 🎯 Handle fullscreen exit
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      // Fullscreen exited
      startBtn.style.display = "block";
      clearInterval(interval);
    }
  });
  
  startBtn.addEventListener("click", startSlideshow);
   */