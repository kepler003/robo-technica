import Slider from './Slider';

setUpSliders();

function setUpSliders() {
  const sliders = document.querySelectorAll('.slider');

  for (const slider of sliders) {
    new Slider(slider);
  }
}