const header = document.querySelector('header');

document.querySelector('.banner').onclick = (e) => {
  e.target.style.display = 'none';
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const showAfterPx = 0;

let {scrollY} = window;
window.addEventListener("scroll", function (e){
  const deltaY = window.scrollY - scrollY;
  scrollY = window.scrollY;
  if (deltaY > 0 && header.offsetTop < window.scrollY){
    // scroll down
    Object.assign(header.style, {
      position: 'absolute',
      top: `${header.offsetTop}px`,
    });
  } else {
    // scroll up
    const positionDelta = header.offsetTop - scrollY;
    const top = clamp(positionDelta - deltaY, -(header.offsetHeight + showAfterPx), 0);
    Object.assign(header.style, {
      position: 'sticky',
      top: `${top}px` ,
    });
  }
});
