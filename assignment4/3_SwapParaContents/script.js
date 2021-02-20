const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', swap);
function swap() {
  //   console.log('swap clicked');
  let temp = para1.innerHTML;
  para1.innerHTML = para2.innerHTML;
  para2.innerHTML = temp;
}
