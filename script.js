const audioContext = new window.AudioContext();

const oscillator = audioContext.createOscillator();

const updateFrequency = function (f) {
  oscillator.frequency.value = f;
};

oscillator.type = "sine";

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
