const ma_btn = document.querySelector("#ma_btn");
const paper = document.querySelector(".num_paper");
const click_me = document.querySelector("#click_me");
const retest = document.querySelector("#retest");

///추가
const rank = document.querySelector(".rank");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");

const result_wrapper = document.querySelector(".result_wrapper");
//const result_page = document.querySelector(".result_page");

///


//if (result_page){
ma_btn.addEventListener("click", ()=>{
  ///추가
  rank.style.display = "none";
  click_me.style.display = "none";

  result1.style.display = "block";
  result2.style.display = "block";
  result3.style.display = "block";

  result_wrapper.classList.add("fade_in");

  ///
})

retest.addEventListener("click", ()=>{
  location.href = "../html/start.html";
})
//}

/// 추가
function init(){
  result1.style.display = "none";
  result2.style.display = "none";
  result3.style.display = "none";
}

init();

///