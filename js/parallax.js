let stars = document.getElementByID('stars');
let moon = document.getElementByID('moon');
let mountains_behind = document.getElementByID('mountains_behind');
let mountains_front = document.getElementByID('mountains_front');
let text = document.getElementByID('text');
let btn = document.getElementByID('btn');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
});

const parallaxEffect = () => {
  const stars = document.getElementByID('stars');
  const moon = document.getElementByID('moon');
  const mountains_behind = document.getElementByID('mountains_behind');
  const text = document.getElementByID('text');
  const btn = document.getElementByID('btn');
  const mountains_front = document.getElementByID('mountains_front');

  window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
  });

}

parallaxEffect();
