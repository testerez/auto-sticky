const header = document.querySelector('header');

window.addEventListener("wheel", function (e){
  if (e.deltaY > 0){
    // down
    Object.assign(header.style, {
      position: 'absolute',
      top: `${header.offsetTop}px`,
    });
  } else if (e.deltaY < 0){
    // up
    const delta = header.offsetTop - window.scrollY;
    const top = `${Math.max(-200, Math.min(0, delta - e.deltaY))}px`;
    console.log({delta, top});
    Object.assign(header.style, {
      position: 'sticky',
      top,
    });
  }
});
// window.addEventListener('scroll', () => {
//   previousScrollTop = 
// });