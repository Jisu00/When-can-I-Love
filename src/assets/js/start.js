const qm1 = document.querySelector(".qm1");
const qm2 = document.querySelector(".qm2");
const btn_start = document.querySelector("#btn_start");
const btn_start_shadow = document.querySelector("#btn_start_shadow");
const start_page = document.querySelector(".start_page");

function init() {
  let flag = 1;

  setInterval(() => {
    if (start_page) {
      if (flag == 1) {
        qm1.style.transform = "rotate(20deg)";
        qm2.style.transform = "rotate(-30deg)";
      } else {
        qm1.style.transform = "rotate(30deg)";
        qm2.style.transform = "rotate(-40deg)";
      }
    }
    flag *= -1;
  }, 1000);
}

if (start_page) {
  btn_start.addEventListener("click", (e) => {
    btn_start_shadow.style.opacity = "0";
    e.target.style.top = "-8px";
    e.target.style.left = "36.5%";
    e.target.style.transition = "all 0.3s";

    setInterval(()=>{
      location.href = "question.html";
    }, 500);
  });
}

init();
