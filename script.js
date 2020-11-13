const icon = document.querySelector('.icon');
const on = document.querySelector('.fas.fa-video');
const off = document.querySelector('.fas.fa-video-slash');
const camera = document.querySelector('.camera');

icon.addEventListener('click', () => {
  on.classList.toggle('invisible');
  off.classList.toggle('invisible');
});

const URL = './model/';

let model, webcam, labelContainer, maxPredictions;

async function init() {
  const modelURL = URL + 'model.json';
  const metadataURL = URL + 'metadata.json';

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true;
  webcam = new tmImage.Webcam(480, 480, flip);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  camera.appendChild(webcam.canvas);
}

async function loop() {
  webcam.update();
  // await predict();
  window.requestAnimationFrame(loop);
}

init();
