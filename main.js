const moreBtn = document.querySelector('.titleAndButton .moreBtn');
const title = document.querySelector('.titleAndButton .title');

console.log(moreBtn, title);

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
