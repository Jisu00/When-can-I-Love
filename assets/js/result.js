const machine_wrapper = document.querySelector(".machine_wrapper");
const machine_btn = document.querySelector("#machine_btn");
const number_ticket = document.querySelector("#number_ticket");
const paper = document.querySelector(".num_paper");
const retest = document.querySelector("#retest");
const result_wrapper = document.querySelector(".result_wrapper");
const result = document.querySelector(".result");
const html = document.querySelector("html");

machine_btn.addEventListener("click", showTicket);

retest.addEventListener("click", ()=>{
  location.href = "../views/start.html";
})

function showTicket() {
  number_ticket.style.display = "block";
  number_ticket.style.top = "200px";
  number_ticket.style.transition = "all 1s";

  setTimeout(showResult, 600);
}

function showResult() {
  machine_wrapper.style.display = "none";
  html.classList.add("removeAlign");

  result_wrapper.style.display = "block";
  result_wrapper.classList.add("fade_in");
}

function init() {
  result_wrapper.style.display = "none";
}

init();
