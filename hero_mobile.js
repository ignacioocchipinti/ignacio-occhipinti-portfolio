let canvasMobileContainer;

function setup() {
    canvasMobileContainer = document.getElementById("canvas-mobile-container");
    let canvas = createCanvas(canvasMobileContainer.offsetWidth, canvasMobileContainer.offsetHeight);
    canvas.parent(canvasMobileContainer);
  
    // Carga el video (reemplaza 'your-video.mp4' con la ruta de tu video)
    video = createVideo(['assets/Render2.mp4']);
  
    // Reproduce el video en loop
    video.loop();
  
    // No mostramos los controles del video
    video.hide();
  }
  
  function draw() {
    background(0);
  
    // Muestra el video en el canvas
    image(video, 0, 0, canvasMobileContainer.offsetWidth, canvasMobileContainer.offsetHeight);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }