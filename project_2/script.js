let height = document.querySelector(".height");
let weight = document.querySelector(".weight");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let h = Number(height.value);
  let w = Number(weight.value);

  let resultDisplay = document.querySelector(".result");

  if (h <= 0) {
    resultDisplay.innerHTML = "Please give a valid height";
  } else if (w <= 0) {
    resultDisplay.innerHTML = "Please give a valid weight";
  } else {
    let result = (w / ((h * h) / 10000)).toFixed(2);
    resultDisplay.innerHTML = result;
  }
});
