import Modal from './Modal';
import Slider from './Slider';
import Map from './Map';

setUpSliders();
setUpModals();
setUpMap();

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

function setUpMap() {
  Map();
}