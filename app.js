let imgList = document.querySelectorAll(".img img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let circles = document.querySelectorAll(".circle");

let i = 0; //目前顯示圖片的索引(index of imgList)

//next btn
next.addEventListener("click", () => {
  i++;
  if (i > imgList.length - 1) {
    i = 0;
  }
  console.log(i);
  setOpacity();
});

//prev btn
prev.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = 3;
  }
  console.log(i);
  setOpacity();
});

//click circle button
circles.forEach((el, idx) => {
  el.addEventListener("click", () => {
    i = idx;
    setOpacity();
  });
});

function setOpacity() {
  imgList.forEach((el, idx) => {
    if (idx != i) {
      el.style.opacity = "0";
    } else {
      el.style.opacity = "1";
    }
  });
}

