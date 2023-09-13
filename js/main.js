function myFun() {
  let text = document.getElementById("text");
  text.classList.toggle("photoTextjs");
}
function myFun2() {
  let text = document.getElementById("text1");
  text.classList.toggle("photoTextjs");
}
function myFun3() {
  let text = document.getElementById("text2");
  text.classList.toggle("photoTextjs");
}

let click = document.getElementById("clickMap");
let map = document.getElementById("map");

click.addEventListener("click", () => {
  map.classList.toggle("hidden");
  if (map.classList.contains("hidden")) {
    click.innerHTML = "CLOSE MAP";
  } else {
    click.innerHTML = "OPEN MAP";
  }
});
