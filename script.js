//Define all web elements
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let frequencySlider = document.getElementById("frequencySlider");
let volumeSlider = document.getElementById("volumeSlider");

//create audio context and gain node
const audioContext = new AudioContext();
let oscillator = null;
let myGain = audioContext.createGain();
myGain.gain.value = volumeSlider.value;
myGain.connect(audioContext.destination);

//function to create new oscillator, connect gain node, and resume audio context
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

//function to stop audio and suspend audio context
const stopAudio = function () {
  audioContext.suspend();
  if (oscillator) {
    oscillator.stop();
    oscillator = null;
  }
};

//function to update frequency
const updateFrequency = function (f) {
  oscillator.frequency.value = f;
  console.log("Frequency: " + f);
};

//function to update volume
const updateVolume = function (v) {
  myGain.gain.value = v;
  console.log("Volume: " + v);
};

//event listeners for buttons
startButton.addEventListener("click", startAudio);
stopButton.addEventListener("click", stopAudio);

//event listeners for sliders
frequencySlider.addEventListener("input", () =>
  updateFrequency(frequencySlider.value)
);
volumeSlider.addEventListener("input", () => updateVolume(volumeSlider.value));
