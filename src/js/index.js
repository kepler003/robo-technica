import Modal from './Modal';
import Slider from './Slider';

setUpSliders();
setUpModals();

function setUpSliders() {
  const sliders = document.querySelectorAll('.slider');
  for (const slider of sliders) {
    new Slider(slider, {
      slideshowTime: +slider.dataset.slideshowTime,
    });
  }
}

function setUpModals() {
  const modals = document.querySelectorAll('.modal');
  for (const modal of modals) {
    new Modal(modal);
  }
}