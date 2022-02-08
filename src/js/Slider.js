
export default class Slider {
  constructor(slider) {
    this.slider = slider;
    this.slides = slider.querySelectorAll('.slider__card');
    this.currentIndex = 0;
    this.renderNav();
  }

  renderNav() {
    this.renderNavWrapper();
    this.renderNavBtns();
  }

  renderNavWrapper() {
    const nav = document.createElement('div');
    nav.classList.add('slider__nav');
    this.nav = nav;
    this.slider.append(nav);
    // nav.addEventListener('click', () => console.log('click'));
  }

  renderNavBtns() {
    for (let i = 0; i < this.slides.length; i++) {
      const slide = this.slides[i];
      const src = slide.querySelector('.slider__img img').getAttribute('src');
      
      const btn = document.createElement('btn');
      btn.classList.add('slider__btn');
      btn.dataset.index = i;
      
      const img = document.createElement('img');
      img.setAttribute('src', src);

      btn.append(img);
      this.nav.append(btn);
    }
  }

  rearrangeSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      const slide = this.slides[i];
      let shift = i - 1;
      slide.style.transform = `translateX(${-100 * shift}%)`;

      if (i === this.currentIndex) {
        slide.style.transform = `translateX(-${100 * (shift + 1)}%)`;
      } else if (i < this.currentIndex) {
        slide.style.transform = `translateX(-${100 * (shift + 2)}%)`;
      } else if (i > this.currentIndex) {
        slide.style.transform = `translateX(-${100 * shift}%)`;
      }
    }
  }
}