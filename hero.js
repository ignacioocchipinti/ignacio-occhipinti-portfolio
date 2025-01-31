let canvasContainer;
let video;

function setup() {
  canvasContainer = document.getElementById("hero-container");
  let canvas = createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
  canvas.parent(canvasContainer);

  video = createVideo(['assets/hero.mp4'], () => {
    video.volume(0);
    video.loop();
    video.play();
  });

  video.hide();
}

function draw() {
  background(255);
  image(video, 0, 0, canvasContainer.offsetWidth, canvasContainer.offsetHeight);
}

function windowResized() {
  resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);

  if (windowWidth >= 992) {
    video.loop();
    video.play();
  } else {
    video.stop();
  }
}
