let imgList = document.querySelectorAll(".img img");
//console.log(imgList);

//next btn
let i = 0;
let next = document.querySelector(".next");
next.addEventListener("click", () => {
  i++;
  if (i > imgList.length - 1) {
    i = 0;
  }
  console.log(i);
  imgList.forEach((el, idx) => {
    if (idx != i) {
      el.style.opacity = "0";
    } else {
      el.style.opacity = "1";
    }
  });
});

//prev btn
let prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = 3;
  }
  console.log(i);
  imgList.forEach((el, idx) => {
    if (idx != i) {
      el.style.opacity = "0";
    } else {
      el.style.opacity = "1";
    }
  });
});

// function changeTo () {  }
// function opacity() {

// }
