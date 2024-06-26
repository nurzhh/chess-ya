let points = document.querySelectorAll('.stages__point');
let stages = document.querySelectorAll('.stages__item-mobile');
let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');

points[0].classList.add('active-point');
stages[0].classList.add('active-stage');

let count = 0;
let interval = 1000*4;
let offset = 0;
let pageNumber = 1;

function btnCheck() {
  if (count === 0){
    leftBtn.disabled = true;
  } else if (count >= (stages.length - 1)) {
    rightBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  }
}

btnCheck();

for(let i=0; i<points.length; i++){
  points[i].addEventListener('click',()=>{
      for(let k = 0; k<stages.length; k++){
          points[k].classList.remove('active-point');
          stages[k].classList.remove('active-stage');
      }
      count = i;
      btnCheck();
      stages[count].classList.add('active-stage');
      points[count].classList.add('active-point');
      
  })
}

leftBtn.addEventListener('click',()=>{
  for(let k = 0; k<stages.length; k++){
      points[k].classList.remove('active-point');
      stages[k].classList.remove('active-stage');
  }
  count--;
  btnCheck();
  stages[count].classList.add('active-stage');
  points[count].classList.add('active-point');
})

rightBtn.addEventListener('click',()=>{
  for(let k = 0; k<stages.length; k++){
      points[k].classList.remove('active-point');
      stages[k].classList.remove('active-stage');
  }
  count++;
  btnCheck();
  stages[count].classList.add('active-stage');
  points[count].classList.add('active-point');
});

function autoSlide () {
  for(let k = 0; k<stages.length; k++){
    points[k].classList.remove('active-point');
    stages[k].classList.remove('active-stage');
  }
  count++;
  if (count >= stages.length){
    count = 0;
    rightBtn.disabled = false;
  }
  stages[count].classList.add('active-stage');
  points[count].classList.add('active-point');
}

let timer = setInterval(()=>{
  autoSlide();
  btnCheck();
}, interval);

const carouselLine = document.querySelector('.carousel__line');
const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');
const page = document.querySelector('.carousel-page');

// if(window.screen.availWidth < 376){ 
  
  
// }

page.innerHTML = "3<span>/6</span>";
buttonPrev.disabled = true;

buttonNext.addEventListener('click', () => {
  offset = offset + 1222;
  page.innerHTML = "6<span>/6</span>";
  if (offset === 1222) {
    buttonNext.disabled = true;
    buttonPrev.disabled = false;
  }
  carouselLine.style.left = -offset + 'px';
});

buttonPrev.addEventListener('click', () => {
  offset = offset - 1222;
  page.innerHTML = "3<span>/6</span>";
  if (offset === 0) {
    buttonPrev.disabled = true;
    buttonNext.disabled = false;
  }
  carouselLine.style.left = -offset + 'px';
});


const btnMobileNext = document.querySelector('.carousel__right-btn');
const btnMobilePrev = document.querySelector('.carousel__left-btn');
const pageMobile = document.querySelector('.carousel__page-mobile');

pageMobile.innerHTML = `${pageNumber}<span>/6</span>`;
btnMobileCheck();

function btnMobileCheck() {
  if (offset === 1600) {
    btnMobileNext.disabled = true;
  } else if (offset === 0) {
    btnMobilePrev.disabled = true;
  } else {
    btnMobileNext.disabled = false;
    btnMobilePrev.disabled = false;
  }
}

btnMobileNext.addEventListener('click', () => {
  pageNumber++;
  pageMobile.innerHTML = `${pageNumber}<span>/6</span>`;
  offset = offset + 320;
  btnMobileCheck()
  carouselLine.style.left = -offset + 'px';
});

btnMobilePrev.addEventListener('click', () => {
  pageNumber--;
  pageMobile.innerHTML = `${pageNumber}<span>/6</span>`;
  offset = offset - 320;
  btnMobileCheck()
  carouselLine.style.left = -offset + 'px';
});