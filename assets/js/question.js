const question_page = document.querySelector(".question_page"),
  loading_page = document.querySelector(".loading_page"),
  question_wrapper = document.querySelector(".question_wrapper"),
  title = document.querySelector(".question_title"),
  btn_wrapper = document.querySelector(".question_btn_wrapper"),
  A = document.querySelector("#A"),
  B = document.querySelector("#B"),
  p_num = document.querySelector("#p_num"),
  run_img = document.querySelector("#run"),
  heart_img = document.querySelector("#heart"),
  ground = document.querySelector("#ground");

let page_num = 1,
  run_pos = 1,
  heart_opa = 5;

let finalResult = {
  "TYPE" : {
    "E" : 0, "I" : 0,
    "S" : 0, "N" : 0,
    "T" : 0, "F" : 0,
    "J" : 0, "P" : 0
  },
  "RESULT": "",
  "SCORE": 0
};

let quest = {
  1: {
    "title": "한껏 꾸민 날,<br><span class='half_HL'>번호를 따였다.</span>",
    "A": {
      "text": "누구세요?",
      "type": "I",
      "score": 0,
    },
    "B": {
      "text": "괜찮은데? 번호를 준다.",
      "type": "E",
      "score": 2,
    },
  },
  2: {
    "title":
      "<span class='half_HL'>재미있어 보이는 대화</span>를<br>하는 무리에 나는",
    "A": {
      "text": "끼어든다.",
      "type": "E",
      "score": 1,
    },
    "B": {
      "text": "관심 없다.",
      "type": "I",
      "score": 0,
    },
  },
  3: {
    "title":
      "썸남/썸녀와의 대화 도중<br><span class='half_HL'>어색한 침묵</span>이 흐른다. ",
    "A": {
      "text": "펜트 하우스 보셨어요?",
      "type": "F",
      "score": 1,
    },
    "B": {
      "text": "차분히 기다린다.",
      "type": "T",
      "score": 0,
    },
  },
  4: {
    "title": "썸남/썸녀에게 문자가 왔다.<br><span class='half_HL'>“같이 밥 먹을래요?”</span>", 
      "A": {
        "text" : "언제 만날까요? 어디서 볼까요?",
        "type" : "J",
        "score" : 1
      }, 
      "B": {
        "text" : "좋아요! 장소나 시간은 당일에!",
        "type" : "P",
        "score" : 0
      }
  },
  5: {
    "title": "<span class='half_HL'>소개팅</span>이 들어왔다.",
    "A": {
      "text": "누군데? 이것저것 물어본다.",
      "type": "",
      "score": 2,
    },
    "B": {
      "text": "나 자만추인거 몰라?😒",
      "type": "",
      "score": 0,
    },
  },
  6: {
    "title": "그 사람은 나를<br><span class='half_HL'>좋아하지 않는 것 같다면,</span>",
    "A": {
      "text": "포기한다😂",
      "type": "T",
      "score": 0,
    },
    "B": {
      "text": "좀 더 다가간다🤭",
      "type": "F",
      "score": 2,
    },
  },
  7: {
    "title":
      "평소 관심 있던 사람이<br><span class='half_HL'>술을 마시자고 한다</span>.",
    "A": {
      "text": "기회다🤩\n같이 마셔요!",
      "type": "E",
      "score": 0,
    },
    "B": {
      "text": "밥은 어때요?\n천천히 알아가고 싶다.",
      "type": "I",
      "score": 0,
    },
  },
  8: {
    "title":
      "내 스타일은 아닌데<br><span class='half_HL'>나를 너무 좋아한다.</span>",
    "A": {
      "text": "굳이 눈을 낮춰서..🤔?",
      "type": "",
      "score": 0,
    },
    "B": {
      "text": "나를 그렇게 좋아한다는데..😥",
      "type": "",
      "score": 1,
    },
  },
  9: {
    "title": "<span class='half_HL'>이상형</span>을 발견했을 때<br>나는",
    "A": {
      "text": "모 아니면 도!\n적극적으로 들이댄다.",
      "type": "E",
      "score": 1,
    },
    "B": {
      "text": "스며드는 게 대세!\n주변을 맴돈다.",
      "type": "I",
      "score": 0,
    },
  },
  10: {
    "title": "<span class='half_HL'>동아리에</span><br>뉴페이스가 보인다.",
    "A": {
      "text": "별 관심없다.",
      "type": "",
      "score": 0,
    },
    "B": {
      "text": "쟤 누구야?",
      "type": "",
      "score": 2,
    },
  },
  11: {
    "title": "<span class='half_HL'>“오늘 데이트 어땠어?”</span><br>라는 질문에 나는", 
    "A": {
      "text" : "“이 조명, 온도, 습도...\n모든 게 좋았어...”",
      "type" : "N",
      "score" : 0
    }, 
    "B": {
      "text" : "“저녁은 진짜 맛있었고,\n영화도 재밌었고...”",
      "type" : "S",
      "score" : 0
    }
  },
  12: {
    "title":
      "썸남/썸녀에게 문자가 왔다.<br><span class='half_HL'>“같이 밥 먹을래요?”</span>",
    "A": {
      "text": "좋아요!\n이곳저곳 맛집을 찾아본다.",
      "type": "J",
      "score": 1,
    },
    "B": {
      "text": "그럴까요?\n그 때 땡기는 걸로 먹어요!",
      "type": "P",
      "score": 0,
    },
  },
};

function removeFadeIn() {
  question_wrapper.classList.remove("fade_in");
  btn_wrapper.classList.remove("fade_in");
}

function clickFunction(e) {
  let idValue = e.target.id;

  A.disabled = "true";
  B.disabled = "true";

  if (idValue == "") return;

  let typeResult = quest[page_num][idValue]["type"];

  finalResult["TYPE"][typeResult] += 1;
  finalResult["SCORE"] += quest[page_num][idValue]["score"];

  setTimeout(() => {
    e.target.classList.add("bold");
  }, 100);

  e.target.classList.add("magnifyBorder");

  setTimeout(() => {
    e.target.classList.remove("magnifyBorder");
    e.target.classList.remove("bold");
    page_num++;

    A.removeAttribute("disabled");
    B.removeAttribute("disabled");

    nextQuestion();
  }, 500);
}

function nextQuestion() {
  if (page_num == 13) {
    loading_page.style.display = "flex";
    question_page.style.display = "none";

    checkTypeAndSend();
  } else {
    btn_wrapper.style.opacity = "0";
    question_wrapper.classList.add("fade_in");
    setTimeout(() => {
      btn_wrapper.classList.add("fade_in");
      btn_wrapper.style.opacity = "1";
      setTimeout(removeFadeIn, 300);
    }, 300);

    title.innerHTML = quest[page_num]["title"];
    A.innerText = quest[page_num]["A"]["text"];
    B.innerText = quest[page_num]["B"]["text"];

    if (btn_wrapper) {
      setTimeout(() => {
        A.addEventListener("click", clickFunction, { once: true });
        B.addEventListener("click", clickFunction, { once: true });
      }, 500);
    }

    p_num.innerText = `${page_num} / 12`;
    run_img.style.left = `${(run_pos += (ground.clientWidth - 33) / 12)}px`;
    heart_img.style.opacity = `${(heart_opa += 6)}%`;
  }
}

function checkTypeAndSend(){
  let text = "";

  finalResult["TYPE"]["I"] > finalResult["TYPE"]["E"] ? text += "I" : text += "E";
  finalResult["TYPE"]["S"] > finalResult["TYPE"]["N"] ? text += "S" : text += "N";
  finalResult["TYPE"]["T"] > finalResult["TYPE"]["F"] ? text += "T" : text += "F";
  finalResult["TYPE"]["J"] > finalResult["TYPE"]["P"] ? text += "J" : text += "P";

  location.href = "../views/result.html?" + text + "/" + finalResult["SCORE"];
}

function init() {
  let flag = 1;
  setInterval(() => {
    if (flag == 1) heart_img.style.transform = "scale(1)";
    else heart_img.style.transform = "scale(0.9)";
    flag *= -1;
  }, 1000);

  nextQuestion();
}

if (question_page) {
  loading_page.style.display = "none";
  init();
}
