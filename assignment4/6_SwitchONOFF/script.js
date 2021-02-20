const img = document.querySelector('.bulbImg');
const btn = document.querySelector('.btn');
var state = false;
const bulbPic = {
  true: 'asset/Bulb-On.png',
  false: 'asset/Bulb-Off.png',
};

btn.addEventListener('click', () => {
  console.log('bulb switch pressed');
  state = !state;
  changeBulbState();
});

function changeBulbState() {
  img.src = bulbPic[state];
  var button_name = 'TURN ' + (state ? 'OFF' : 'ON') + ' LIGHT';
  btn.innerHTML = button_name;
}
