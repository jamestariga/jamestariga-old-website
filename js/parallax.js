const parallaxEffect = () => {
    const moon = document.getElementById('moon');
    const stars = document.getElementById('stars');
    const mountains_behind = document.getElementById('mountains_behind');
    const mountains_front = document.getElementById('mountains_front');
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');
    const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    var value = window.scrollY;
    moon.style.top = -value * -1.05 + 'px';
    stars.style.left = value * 0.25 + 'px';
    mountains_behind.style.top =-value * -0.5 + 'px';
    header.style.top =-value * -0.5 + 'px';
    mountains_front.style.top =-value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
  });

}

parallaxEffect();
