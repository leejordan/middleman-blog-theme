var flow = document.getElementById('flow');
var length = 30;
var minlength = 5;
var maxlength = 50;

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomiseWave(length) {
  var coinflip = getRandomInt(1, 3);
  if (coinflip === 1 && length < maxlength) {
    length = length + 1;
  } else if (coinflip === 2 && length > minlength) {
    length = length - 1;
  } else {
    length = length;
  }
  return parseInt(length);
}

function addElement() {
  var newWave = document.createElement('div'); 
  var newWaveSpan = document.createElement('span');
  var newWaveContent = document.createTextNode(generateRandomString(length));
  newWave.setAttribute('class', 'flow__wave');
  newWaveSpan.appendChild(newWaveContent);
  newWave.appendChild(newWaveSpan);
  flow.appendChild(newWave);
  length = randomiseWave(length);
}

function moveWave() {
  flow.firstChild.remove();
  addElement();
  moveBoat();
}

function moveBoat() {
  var boatWave = document.querySelector('.flow .flow__wave:nth-child(50)');
  var boat = document.getElementById('boat');
  boatWave.insertBefore(boat, document.querySelector('.flow .flow__wave:nth-child(50) span'));
}

function setupWave() {
  var times = 100;
  for(var i=0; i < times; i++) {
    addElement();
  }

  var boatWave = document.querySelector('.flow .flow__wave:nth-child(50)');
  var newBoat = document.createElement('div');
  newBoat.setAttribute('id', 'boat');
  boatWave.insertBefore(newBoat, document.querySelector('.flow .flow__wave:nth-child(50) span'));

  wave = setInterval(moveWave, 50);
}

function stopWave() {
  clearInterval(wave);
}
