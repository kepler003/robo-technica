
export default class Slider {
  constructor(slider, config) {
    this.slider = slider;
    this.slides = slider.querySelectorAll('.slider__card');
    this.btns = [];
    this.currentIndex = 0;
    this.slideshowTime = config?.slideshowTime ?? 5000;
    this.slideChangeInterval = null;
    
    this.renderNav();
    this.startAutoScroll();
  }

  handleNavClick(e) {
    const target = e.target;
    const btn = target.closest('.slider__btn');

    if (!btn) return;

    const index = btn.dataset.index;
    this.changeSlide(index);
    this.resetAutoScroll();
  }

  renderNav() {
    this.renderNavWrapper();
    this.renderNavBtns();
    this.updateNavbtns();
  }

  renderNavWrapper() {
    const nav = document.createElement('div');
    nav.classList.add('slider__nav');
    this.nav = nav;
    this.slider.append(nav);
    nav.addEventListener('click', (e) => this.handleNavClick(e));
  }

  renderNavBtns() {
    for (let i = 0; i < this.slides.length; i++) {
      const slide = this.slides[i];
      const src = slide.querySelector('.slider__img img').getAttribute('src');
      
      const btn = document.createElement('btn');
      btn.classList.add('slider__btn');
      btn.dataset.index = i;
      this.btns.push(btn);
      
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

  changeSlide(index) {
    index = +index;
    if (index < 0) index = this.slides.length - 1;
    if (index > this.slides.length - 1) index = 0;
    this.currentIndex = index;
    this.rearrangeSlides();
    this.updateNavbtns();
  }

  updateNavbtns() {
    for (const btn of this.btns) {
      const index = +btn.dataset.index;
      if (index === this.currentIndex) {
        btn.classList.add('slider__btn--active');
      } else {
        btn.classList.remove('slider__btn--active');
      }
    }
  }

  startAutoScroll() {
    this.slideChangeInterval = setInterval(() => {
      this.changeSlide(this.currentIndex + 1);
    }, this.slideshowTime);
  }

  resetAutoScroll() {
    clearInterval(this.slideChangeInterval);
    this.startAutoScroll();
  }

  stopAutoScroll() {
    clearInterval(this.slideChangeInterval);
  }
}