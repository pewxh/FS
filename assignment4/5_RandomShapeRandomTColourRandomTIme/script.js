const shape = document.getElementById('shape');

shape.addEventListener('click', afterClicked);

function afterClicked() {
  console.log('clicked..');
  this.style.borderRadius = `${randomNumGen(100)}%`;
  this.style.height = `${Math.max(10, randomNumGen(50))}%`;
  this.style.width = `${Math.max(10, randomNumGen(50))}%`;
  this.style.margin = randomPositionGenerator();
  this.style.backgroundColor = randomColourGenerator();
}

function randomPositionGenerator() {
  let top = randomNumGen(screen.height);
  let right = randomNumGen(screen.width);
  let bottom = randomNumGen(screen.height);
  let left = randomNumGen(screen.width);
  //   console.log(screen.width);
  top = Math.min(top, screen.height - top);
  right = Math.min(right, screen.width - right);
  bottom = Math.min(bottom, screen.height - bottom);
  left = Math.min(left, screen.width - left);
  var margin = `${top}px ${right}px ${bottom}px ${left}px`;
  console.log(margin);
  return margin;
}

function randomNumGen(max) {
  return Math.floor(Math.random() * max);
}

function randomColourGenerator() {
  let hex = '0123456789abcdef';
  let code = '';
  for (let i = 0; i < 6; i++) code += hex[randomNumGen(16)];
  //   console.log(code);
  return '#' + code;
}
