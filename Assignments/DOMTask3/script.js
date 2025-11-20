const btn = document.querySelector("button");
const percent = document.querySelector("p");
const bar = document.querySelector(".bar");
let grow = 0;
// ek variable banavo je download progress track karse

// button par click event listener add karo
btn.addEventListener("click", () => {
  // button ne disable karvo ke download process doraan user click na kari shake
  btn.style.pointerEvents = "none";
  // random time generate karo 5 to 10 seconds tk
  const num = 50 + Math.floor(Math.random() * 50);
  // console par download time print karo
  console.log("Your file will be downloaded in", num / 10, "seconds");
  // interval set karo je progress bar ko update karse
  var int = setInterval(() => {
    if (grow >= 100) {
      clearInterval(int);
      return;
    }
    grow++;
    percent.textContent = grow + "%";
    bar.style.width = grow + "%";
  }, num);

  // timeout set karo je download complete karse
  setTimeout(() => {
    clearInterval(int);
    grow = 100;
    percent.textContent = "100%";
    bar.style.width = "100%";

    btn.textContent = "Downloaded";
    btn.style.opacity = 0.5;
  }, num * 100);
});

// pehle mai ne all items ko select kara
// phr ek variable banaya jo progress ko 0 se 100 tk le jayega
// button par click event listener lagaya
// button ko disable kar diya taki user click na kar sake
// random time generate kara 5 se 10 seconds ke beech
// console par download time print kara
// interval set kara jo progress bar ko update karega
// agar progress 100% ho jata hai to interval clear kar diya
// timeout set kara jo download complete karega
// timeout ke andar interval clear kar diya, progress ko 100% set kara
// button ka text change kar diya "Downloaded" aur opacity reduce kar di
// taki user ko pata chale ki download complete ho chuka hai
// and that is it ......................
