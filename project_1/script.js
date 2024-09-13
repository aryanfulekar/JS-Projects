let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");


for (btn of buttons) {
  btn.addEventListener("click", (e) => {
    console.log(e.target);

    let color = e.target.getAttribute("id");
    console.log(color);

    body.style.backgroundColor=color;
 
   

  });
}
