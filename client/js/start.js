const qm1 = document.querySelector(".qm1");
const qm2 = document.querySelector(".qm2");
const btn_start = document.querySelector("#btn_start");
//const start_page = document.querySelector(".start_page");

function init(){
  let flag = 1;

  setInterval(()=>{
    //if (start_page){
      if (flag == 1){
        qm1.style.transform = "rotate(20deg)";
        qm2.style.transform = "rotate(-30deg)";
      }
      else{
        qm1.style.transform = "rotate(30deg)";
        qm2.style.transform = "rotate(-40deg)";
      }
    //}
    flag*=-1;
  }, 1000);

  /// 추가

  setTimeout(()=>{
    btn_start.classList.add("fade_in");
    btn_start.style.opacity = "1";
  }, 500);

  ///
}

//if (start_page){
  btn_start.addEventListener("click",()=>{
    btn_start.classList.add("borderLeftRight_after");
    setTimeout(()=>{
      location.href = "../html/question.html";
    },500);
  });
//}

init();


