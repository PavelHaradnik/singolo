//Menu

const MENU = document.querySelectorAll('li.nav-head');
MENU.forEach(el => {
  el.addEventListener('click', (event) => {
    MENU.forEach(el => el.classList.remove('nav-active'));
    event.target.parentNode.classList.add('nav-active');
    document.querySelectorAll('nav.head-menu>ul')[0].classList.remove('nav-active');

  })
});


//Slider

const left_arrow = document.querySelector(".slider-left-arrow");
const right_arrow = document.querySelector(".slider-right-arrow");
let slides = document.getElementsByClassName("slider-slides");
let slider = document.querySelector(".slider");

let slideIndex = 1;
showSlides(slideIndex);

left_arrow.addEventListener('click', (e) => {
  plusSlides(-1);
});

right_arrow.addEventListener('click', (e) => {
  plusSlides(1);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
  blackScreenHorizontal.classList.remove('screen-on');
  blackScreenVertical.classList.remove('screen-on');
}

function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "";
    if (slideIndex - 1 == 1){
      slider.classList.add('blue');
    }
    else {
      slider.classList.remove('blue');
    }
}

//Iphone's screen

let verticalIphoneButton = document.querySelector('.iphone-vertical-button');
let blackScreenVertical = document.querySelector('.slider-black-screen-vertical');

verticalIphoneButton.addEventListener('click', (event) => {
blackScreenVertical.classList.toggle('screen-on');
});

let horizontalIphoneButton = document.querySelector('.iphone-horizontal-button');
let blackScreenHorizontal = document.querySelector('.slider-black-screen-horizontal');

horizontalIphoneButton.addEventListener('click', (event) => {
blackScreenHorizontal.classList.toggle('screen-on');
})



//Portfolio
const PORT_BTNS = document.querySelectorAll('div.portfolio-button');

function rand_img () {
  let selector = '';
  let temp = Math.round(rand = 1 - 0.5 + Math.random() * (12 - 1 + 1));
  switch (temp) {
    case 1: selector = '[alt="pic01"]'; break;
    case 2: selector = '[alt="pic02"]'; break;
    case 3: selector = '[alt="pic03"]'; break;
    case 4: selector = '[alt="pic04"]'; break;
    case 5: selector = '[alt="pic05"]'; break;
    case 6: selector = '[alt="pic06"]'; break;
    case 7: selector = '[alt="pic07"]'; break;
    case 8: selector = '[alt="pic08"]'; break;
    case 9: selector = '[alt="pic09"]'; break;
    case 10: selector = '[alt="pic10"]'; break;
    case 11: selector = '[alt="pic11"]'; break;
    case 12: selector = '[alt="pic12"]'; break;
  }
  return document.querySelector(selector);
}

PORT_BTNS.forEach(el => {
  el.addEventListener('click', (event) => {
    PORT_BTNS.forEach(el => el.classList.remove('button-active'));
    event.target.classList.add('button-active');

    for (let i=0; i<20; i++){
      let first = rand_img ();
      let second = rand_img ();
      second.after(first);
    }
  })
});


//Portfolio frame

const PORT_PICS = document.querySelectorAll('div.portfolio-pics>img');
PORT_PICS.forEach(el => {
  el.addEventListener('click', (event) => {
    PORT_PICS.forEach(el => el.classList.remove('portfolio-pic-active'));
    event.target.classList.add('portfolio-pic-active');
  })
});

// Form

const WID_SEND = document.querySelectorAll('.window')[0];
const BTN_SEND = document.querySelectorAll('.form-button')[0];
const BTN_OK = document.querySelectorAll('.window-submit-btn')[0];

const NAME = document.querySelectorAll('.quote-form>input')[0];
const EMAIL = document.querySelectorAll('.quote-form>input')[1];
const SUBJECT = document.querySelectorAll('.quote-form>input')[2];
const DESCRIBE = document.querySelectorAll('.quote-form>textarea')[0];

const FORM = document.querySelector('.quote-form');
FORM.addEventListener('submit', (el) => el.preventDefault()); 

const MODAL_SUBJECT = document.querySelectorAll('.window-subject')[0];
const MODAL_DESCRIBE = document.querySelectorAll('.window-describe')[0];


function formClean () {
  NAME.value = '';
  EMAIL.value = '';
  SUBJECT.value = '';
  DESCRIBE.value = '';
  MODAL_SUBJECT.textContent = 'Без темы';
  MODAL_DESCRIBE.textContent = 'Без описания';
}

BTN_SEND.addEventListener('click', (event) => {
  if (NAME.value != '' && EMAIL.value != '' ) {
    WID_SEND.classList.remove('window-none');
    if (SUBJECT.value!='') {MODAL_SUBJECT.textContent = 'Тема: ' + SUBJECT.value;}
    if (DESCRIBE.value != '') {MODAL_DESCRIBE.textContent = 'Описание: ' + DESCRIBE.value;}    
  }
});


BTN_OK.addEventListener('click', (event) => {
  WID_SEND.classList.add('window-none');
  formClean ();
});