let contents = document.querySelectorAll(".slider .list .content");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// config param
let countcontent = contents.length;
let contentActive = 0;
// event next click
next.onclick = function () {
  contentActive = contentActive + 1;
  if (contentActive >= countcontent) {
    contentActive = 0;
  }
  showSlider();
};
//event prev click
prev.onclick = function () {
  contentActive = contentActive - 1;
  if (contentActive < 0) {
    contentActive = countcontent - 1;
  }
  showSlider();
};
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);

function showSlider() {
  // remove content active old
  let contentActiveOld = document.querySelector(".slider .list .content.active");
  contentActiveOld.classList.remove("active");

  // active new content
  contents[contentActive].classList.add("active");

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}
