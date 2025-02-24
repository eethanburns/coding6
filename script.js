const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const oscillator = audioContext.createOscillator();

oscillator.frequency.value = 100;

oscillator.type = "sawtooth";

let myGain = audioContext.createGain();
myGain.gain.value = 0.5;

oscillator.connect(myGain);
myGain.connect(audioContext.destination);

const startAudio = function () {
  audioContext.resume();
  oscillator.start();
};

let theButton = document.getElementById("startButton");
theButton.addEventListener("click", startAudio);
