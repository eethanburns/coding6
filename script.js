let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let frequencySlider = document.getElementById("frequencySlider");
let volumeSlider = document.getElementById("volumeSlider");

const audioContext = new AudioContext();
let oscillator = null;
let myGain = audioContext.createGain();
myGain.gain.value = volumeSlider.value;
myGain.connect(audioContext.destination);

const startAudio = function () {
  if (!oscillator) {
    oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = frequencySlider.value;
    oscillator.connect(myGain);
    oscillator.start();
  }
  audioContext.resume();
};

const stopAudio = function () {
  audioContext.suspend();
  if (oscillator) {
    oscillator.stop();
    oscillator = null;
  }
};

const updateFrequency = function (f) {
  oscillator.frequency.value = f;
  console.log("Frequency: " + f);
};

const updateVolume = function (v) {
  myGain.gain.value = v;
  console.log("Volume: " + v);
};

startButton.addEventListener("click", startAudio);
stopButton.addEventListener("click", stopAudio);

frequencySlider.addEventListener("input", () =>
  updateFrequency(frequencySlider.value)
);
volumeSlider.addEventListener("input", () => updateVolume(volumeSlider.value));
