const paper = document.querySelector(".num_paper");
const click_me = document.querySelector("#click_me");
const retest = document.querySelector("#retest");

const rank = document.querySelector(".rank");
const resultTop = document.querySelector(".resultTop");
const resultMiddle = document.querySelector(".resultMiddle");
const resultBottom = document.querySelector(".resultBottom");

const html = document.querySelector("html");

const result_wrapper = document.querySelector(".result_wrapper");
const result_page = document.querySelector(".result_page");

function init() {
  retest.addEventListener("click", () => {
    location.href = "/";
  });
}

if (result_page) {
  init();
}
