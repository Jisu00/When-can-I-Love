const qm1 = document.querySelector(".qm1");
const qm2 = document.querySelector(".qm2");
const btn_start = document.querySelector("#btn_start");
//const start_page = document.querySelector(".start_page");

function clickFunction(e){
  setTimeout(()=>{
    e.target.classList.add("bold");
  }, 100);

  e.target.classList.add("magnifyBorder");
}

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

}

//if (start_page){
  btn_start.addEventListener("click",(e)=>{
    clickFunction(e);
    setTimeout(()=>{
      location.href = "../html/question.html";
    },300);
  });
//}

init();


