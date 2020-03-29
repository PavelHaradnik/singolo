
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

var slideShow = (function () {
    return function (selector, config) {
      var
        _slider = document.querySelector(selector), 
        _sliderContainer = _slider.querySelector('.slider__items'), 
        _sliderItems = _slider.querySelectorAll('.slider__item'), 
        _sliderControls = _slider.querySelectorAll('.slider__control'), 
        _currentPosition = 0, 
        _transformValue = 0, 
        _transformStep = 100, 
        _itemsArray = [], 
        _timerId,
        _indicatorItems,
        _indicatorIndex = 0,
        _indicatorIndexMax = _sliderItems.length - 1,
        _stepTouch = 50,
        _config = {
          isAutoplay: false, 
          directionAutoplay: 'next', 
          delayAutoplay: 5000, 
          isPauseOnHover: true 
        };

      
      for (var key in config) {
        if (key in _config) {
          _config[key] = config[key];
        }
      }

      
      for (var i = 0, length = _sliderItems.length; i < length; i++) {
        _itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });
      }

      
      var position = {
        getItemIndex: function (mode) {
          var index = 0;
          for (var i = 0, length = _itemsArray.length; i < length; i++) {
            if ((_itemsArray[i].position < _itemsArray[index].position && mode === 'min') || (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')) {
              index = i;
            }
          }
          return index;
        },
        getItemPosition: function (mode) {
          return _itemsArray[position.getItemIndex(mode)].position;
        }
      };

      
      var _move = function (direction) {
        var nextItem, currentIndicator = _indicatorIndex;;
        if (direction === 'next') {
          _currentPosition++;
          if (_currentPosition > position.getItemPosition('max')) {
            nextItem = position.getItemIndex('min');
            _itemsArray[nextItem].position = position.getItemPosition('max') + 1;
            _itemsArray[nextItem].transform += _itemsArray.length * 100;
            _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
          }
          _transformValue -= _transformStep;
          _indicatorIndex = _indicatorIndex + 1;
          if (_indicatorIndex > _indicatorIndexMax) {
            _indicatorIndex = 0;
          }
        } else {
          _currentPosition--;
          if (_currentPosition < position.getItemPosition('min')) {
            nextItem = position.getItemIndex('max');
            _itemsArray[nextItem].position = position.getItemPosition('min') - 1;
            _itemsArray[nextItem].transform -= _itemsArray.length * 100;
            _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
          }
          _transformValue += _transformStep;
          _indicatorIndex = _indicatorIndex - 1;
          if (_indicatorIndex < 0) {
            _indicatorIndex = _indicatorIndexMax;
          }
        }
        _sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';
        
       
      };

     
      var _moveTo = function (index) {
        var i = 0, direction = (index > _indicatorIndex) ? 'next' : 'prev';
        while (index !== _indicatorIndex && i <= _indicatorIndexMax) {
          _move(direction);
          i++;
        }
      };

      
   
      var _stopAutoplay = function () {
        clearInterval(_timerId);
      };

     
      var _addIndicators = function () {
        var indicatorsContainer = document.createElement('ol');
        indicatorsContainer.classList.add('slider__indicators');
        for (var i = 0, length = _sliderItems.length; i < length; i++) {
          var sliderIndicatorsItem = document.createElement('li');
          if (i === 0) {
            sliderIndicatorsItem.classList.add('active');
          }
          sliderIndicatorsItem.setAttribute("data-slide-to", i);
          indicatorsContainer.appendChild(sliderIndicatorsItem);
        }
        _slider.appendChild(indicatorsContainer);
        _indicatorItems = _slider.querySelectorAll('.slider__indicators > li')
      };

      var _isTouchDevice = function () {
        return !!('ontouchstart' in window || navigator.maxTouchPoints);
      };

      
      var _setUpListeners = function () {
        var _startX = 0;
        if (_isTouchDevice()) {
          _slider.addEventListener('touchstart', function (e) {
            _startX = e.changedTouches[0].clientX;
            _startAutoplay();
          });
          _slider.addEventListener('touchend', function (e) {
            var
              _endX = e.changedTouches[0].clientX,
              _deltaX = _endX - _startX;
            if (_deltaX > _stepTouch) {
              _move('prev');
            } else if (_deltaX < -_stepTouch) {
              _move('next');
            }
            _startAutoplay();
          });
        } else {
          for (var i = 0, length = _sliderControls.length; i < length; i++) {
            _sliderControls[i].classList.add('slider__control_show');
          }
        }
        _slider.addEventListener('click', function (e) {
          if (e.target.classList.contains('slider__control')) {
            e.preventDefault();
            _move(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');
            
          } else if (e.target.getAttribute('data-slide-to')) {
            e.preventDefault();
            _moveTo(parseInt(e.target.getAttribute('data-slide-to')));
            _startAutoplay();
          }
        });
       
      };
    
     
      _setUpListeners();
      

      return {
        next: function () {
          _move('next');
        },
                 
        left: function () {
          _move('prev');
        },
        
      }
    }
  }());

  slideShow('.slider', {
    isAutoplay: true
  });
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