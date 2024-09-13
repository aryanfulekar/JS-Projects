let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

for (let btn of buttons) {
  // Declare 'btn' with 'let'
  btn.addEventListener("click", (e) => {
    console.log(e.target);

    let color = e.target.getAttribute("id");

    body.style.backgroundColor = color; // Change the body's background color
  });
}
 