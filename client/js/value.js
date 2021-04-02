const TYPE = document.querySelector("#TYPE");
const SCORE = document.querySelector("#SCORE");

const rank_ment = document.querySelector("#rank_ment1");
const char_name = document.querySelector(".result_title");
const after = document.querySelector("#after");
const after_explain = document.querySelector("#after_explain");

const ex_1 = document.querySelector("#ex_1");
const ex_2 = document.querySelector("#ex_2");
const ex_3 = document.querySelector("#ex_3");
const ex_4 = document.querySelector("#ex_4");

let type_num, score_num;

///////////////////////////////////////////

const text1 = {
  1 : { // 1 ~ 7일
    "ment" : "ment1",
    "name" : "name1"
  },
  2 : { // 한달 이내
    "ment" : "ment2",
    "name" : "name2"
  },
  3 : { // 6달
    "ment" : "ment3",
    "name" : "name3"
  },
  4 : { // 1년 ~
    "ment" : "ment4",
    "name" : "name4"
  },
  5 : { // 5년 ~
    "ment" : "ment5",
    "name" : "name5"
  },
  6 : { // 불가
    "ment" : "ment6",
    "name" : "name6"
  },

  "random" : 0
}

const explain = {
  0 : {
    1 : "I1",
    2 : "I2",
    3 : "I3",
    4 : "I4"
  },
  1 : {
    1 : "E1",
    2 : "E2",
    3 : "E3",
    4 : "E4"
  },
  2 : {
    1 : "S1",
    2 : "S2",
    3 : "S3",
    4 : "S4"
  },
  3 : {
    1 : "N1",
    2 : "N2",
    3 : "N3",
    4 : "N4"
  },
  4 : {
    1 : "T1",
    2 : "T2",
    3 : "T3",
    4 : "T4"
  },
  5 : {
    1 : "F1",
    2 : "F2",
    3 : "F3",
    4 : "F4"
  },
  6 : {
    1 : "J1",
    2 : "J2",
    3 : "J3",
    4 : "J4"
  },
  7 : {
    1 : "P1",
    2 : "P2",
    3 : "P3",
    4 : "P4"
  }
}


/////////////////////////////////////////////

function randomValue(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function fillHTML(){
  ex_1.innerText = explain[type_num.charAt(0)][randomValue(1, 4)];
  ex_2.innerText = explain[type_num.charAt(1)][randomValue(1, 4)];
  ex_3.innerText = explain[type_num.charAt(2)][randomValue(1, 4)];
  ex_4.innerText = explain[type_num.charAt(3)][randomValue(1, 4)];

  let text;

  // 일단 조건문 안의 score은 임의로 설정함
  if (score_num >= 35){ 
    text1["random"] = randomValue(1, 7), text = `${text1["random"]}일 뒤`;
    rank_ment.innerText = text1[1]["ment"];
    char_name.innerText = text1[1]["name"];
  }
  else if (score_num >= 28){
    text = "1개월 뒤"; // 이건 그냥 한달 이내라고 해도 될듯
    rank_ment.innerText = text1[2]["ment"];
    char_name.innerText = text1[2]["name"];
  }
  else if (score_num >= 20){
    text1["random"] = randomValue(2, 6), text = `${text1["random"]}개월 뒤`;
    rank_ment.innerText = text1[3]["ment"];
    char_name.innerText = text1[3]["name"];
  }
  else if (score_num >= 13){
    text1["random"] = randomValue(7, 12), text = `${text1["random"]}개월 뒤`;
    rank_ment.innerText = text1[4]["ment"];
    char_name.innerText = text1[4]["name"];
  }
  else if (score_num >= 7){
    text1["random"] = randomValue(5, 10), text = `${text1["random"]}년 뒤`;
    rank_ment.innerText = text1[5]["ment"];
    char_name.innerText = text1[5]["name"];
  }
  else{
    text = "측정불가", after_explain.innerText = "연애 시작일 측정불가"; // 측정 불가라고 해도 될듯
    rank_ment.innerText = text1[6]["ment"];
    char_name.innerText = text1[6]["name"];
    after_explain.style.color = "red";
  }
  after.innerText = text;
}

function init(){
  tmp = location.href.split("?");
  data = tmp[1].split("/");
  type_num = data[0];
  score_num = data[1];
  //score_num = 6;

  fillHTML();
}

init();