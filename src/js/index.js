import Modal from './Modal';
import Slider from './Slider';

setUpSliders();
setUpModals();

function setUpSliders() {
  const sliders = document.querySelectorAll('.slider');
  for (const slider of sliders) {
    new Slider(slider, slider.dataset);
  }
}

function setUpModals() {
  const modals = document.querySelectorAll('.modal');
  for (const modal of modals) {
    new Modal(modal);
  }
}