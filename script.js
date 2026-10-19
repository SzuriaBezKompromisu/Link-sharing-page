const btnColor = document.querySelector(".color-btn");
const backgrounds = [...document.querySelectorAll(".background")];
const colors = ["red", "orange", "purple", "green"];
let activeColor = 0;

btnColor.addEventListener("click", function () {
  if (activeColor < colors.length - 1) activeColor++;
  else activeColor = 0;

  backgrounds.forEach((bg, i) => {
    if (i !== activeColor) bg.style.opacity = "0";
    else bg.style.opacity = "1";
  });

  document.documentElement.dataset.theme = colors[activeColor];
});
