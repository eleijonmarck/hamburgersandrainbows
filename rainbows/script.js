function createRainbow() {
  const rainbow = document.createElement("div");
  rainbow.classList.add("rainbow");

  rainbow.innerText = "rainbow";

  document.body.appendChild(rainbow);
}

setInterval(createRainbow, 300);

// function createrainbow() {
//   const rainbow = document.createElement("div");
//   rainbow.classList.add("rainbow");

//   rainbow.style.left = Math.random() * 100 + "vw";
//   rainbow.style.animationDuration = Math.random() * 2 + 3 + "s";

//   rainbow.innerText = "🌈";

//   document.body.appendChild(rainbow);

//   setTimeout(() => {
//     rainbow.remove();
//   }, 5000);
// }

// setInterval(createrainbow, 300);
