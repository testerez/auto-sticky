const header = document.querySelector('header');
const section = document.querySelector('section');


let {scrollY} = window;
window.addEventListener("scroll", function (e){
  const deltaY = window.scrollY - scrollY;
  scrollY = window.scrollY;
  if (deltaY > 0){
    console.log('down')
    // down
    Object.assign(header.style, {
      position: 'absolute',
      top: `${header.offsetTop}px`,
    });
  } else if (deltaY < 0){
    // up
    const delta = header.offsetTop - scrollY;
    const top = `${Math.max(-200, Math.min(0, delta - deltaY))}px`;
    console.log({delta, top, scrollY});
    Object.assign(header.style, {
      position: 'sticky',
      top,
    });
  }
});
