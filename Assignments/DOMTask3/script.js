const btn = document.querySelector("button");
const percent = document.querySelector("p");
const bar = document.querySelector(".bar");
let grow = 0;

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none"; // disable button

  const num = 50 + Math.floor(Math.random() * 50);
  console.log("Your file will be downloaded in", num / 10, "seconds");

  var int = setInterval(() => {
    if (grow >= 100) {
      clearInterval(int);
      return;
    }
    grow++;
    percent.textContent = grow + "%";
    bar.style.width = grow + "%";
  }, num);

  setTimeout(() => {
    clearInterval(int);
    grow = 100;
    percent.textContent = "100%";
    bar.style.width = "100%";

    btn.textContent = "Downloaded";
    btn.style.opacity = 0.5;
  }, num * 100);
});
