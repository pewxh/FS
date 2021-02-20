const circle = document.querySelector('.circle');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  circle.style.backgroundColor = randomColourGenerator();
  //   console.log('clicked');
});

function randomColourGenerator() {
  const hex = '0123456789abcdef'; // valid hex characters for the colour code
  var code = '#'; // code starts with a bang (#) .. eg #123456
  while (code.length < 7) code += hex[Math.floor(Math.random() * hex.length)]; // appends a new char from 'hex' untill code becomes a valid colour code
  return code;
}
