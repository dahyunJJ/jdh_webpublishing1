const $tabBtn = document.querySelectorAll(".tab_title>li");
const $tabList = document.querySelectorAll(".tab_list>li");
console.log($tabBtn);
console.log($tabList);

$tabBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    $tabBtn.forEach((a) => {
      a.classList.remove("on");
    });
    $tabBtn[i].classList.add("on");
    $tabList.forEach((b) => {
      b.classList.remove("on");
    });
    $tabList[i].classList.add("on");
  });
});

// ham 버튼
const $ham = document.querySelector(".ham");
const $close = document.querySelector(".close");
const $M_menu = document.querySelector(".M_menu");
console.log($ham);
console.log($M_menu);

$ham.addEventListener("click", function () {
  $M_menu.classList.toggle("on");
});
$close.addEventListener("click", function () {
  $M_menu.classList.remove("on");
});
