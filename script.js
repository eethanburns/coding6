const audioContext = new window.AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.type = "sine";
oscillator.frequency.value = 440;
let myGain = audioContext.createGain();
myGain.gain.value = 0.5;

const updateFrequency = function (f) {
  oscillator.frequency.value = f;
};

oscillator.connect(myGain);
myGain.connect(audioContext.destination);

const startAudio = function () {
  audioContext.resume();
  oscillator.start();
};

let theButton = document.getElementById("startButton");
theButton.addEventListener("click", startAudio);
