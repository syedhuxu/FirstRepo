const body = document.body;

// Audios for piano
const audioObj = {
  a: new Audio("./28.mp3"),
  s: new Audio("./29.mp3"),
  d: new Audio("./30.mp3"),
  f: new Audio("./31.mp3"),
  g: new Audio("./32.mp3"),
  h: new Audio("./33.mp3"),
  j: new Audio("./34.mp3"),
  k: new Audio("./35.mp3"),
  l: new Audio("./36.mp3"),
  p: new Audio("./37.mp3"),
  o: new Audio("./38.mp3"),
  i: new Audio("./39.mp3"),
  u: new Audio("./40.mp3"),
  y: new Audio("./41.mp3"),
  t: new Audio("./42.mp3"),
  r: new Audio("./43.mp3"),
  e: new Audio("./44.mp3"),
  w: new Audio("./45.mp3"),
  q: new Audio("./46.mp3"),
  z: new Audio("./47.mp3"),
  x: new Audio("./48.mp3"),
  c: new Audio("./49.mp3"),
  v: new Audio("./50.mp3"),
  b: new Audio("./51.mp3"),
  n: new Audio("./52.mp3"),
  m: new Audio("./53.mp3"),
  1: new Audio("./54.mp3"),
  2: new Audio("./55.mp3"),
  3: new Audio("./56.mp3"),
  4: new Audio("./57.mp3"),
  5: new Audio("./58.mp3"),
  6: new Audio("./59.mp3"),
  7: new Audio("./60.mp3"),
  8: new Audio("./61.mp3"),
  9: new Audio("./63.mp3"),
};

// Play function to trigger key sounds and animations
function triggerKey(key) {
  const k = key.toLowerCase();

  // Sound play karwana
  if (audioObj[k]) {
    audioObj[k].currentTime = 0;
    audioObj[k].play();
  }

  // keys pe effect dena
  const keyDiv = document.querySelector(`[data-key="${k}"]`);
  if (keyDiv) {
    keyDiv.classList.add("active");
    setTimeout(() => keyDiv.classList.remove("active"), 150);
  }
}

// Keyboard press event
body.addEventListener("keydown", (e) => {
  triggerKey(e.key);
});

// Button click event
document.querySelectorAll(".key").forEach((btn) => {
  btn.addEventListener("click", () => {
    triggerKey(btn.dataset.key);
  });
});

//1. body ko select karna
//2. audio objects banana
//3. triggerKey function banana jo sound play kare aur animation de
//4. keyboard event listener lagana
//5. button click event listener lagana
