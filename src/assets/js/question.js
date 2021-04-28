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
  "CA": 0,
  "PO": 0,
  "AC": 0,
  "AW": 0,
  "SCORE": 0,
};

let quest = {
  1: {
    "title": "한껏 꾸민 날,<br><span class='half_HL'>번호를 따였다.</span>",
    "A": {
      "text": "누구세요?",
      "type": "",
      "score": 0,
    },
    "B": {
      "text": "괜찮은데? 번호를 준다.",
      "type": "CA",
      "score": 1,
    },
  },
  2: {
    "title":
      "<span class='half_HL'>재미있어 보이는 대화</span>를<br>하는 무리에 나는",
    "A": {
      "text": "끼어든다.",
      "type": "PO",
      "score": 1,
    },
    "B": {
      "text": "관심 없다.",
      "type": "",
      "score": -1,
    },
  },
  3: {
    "title":
      "썸남/썸녀와의 대화 도중<br><span class='half_HL'>어색한 침묵</span>이 흐른다. ",
    "A": {
      "text": "펜트 하우스 보셨어요?",
      "type": "AC",
      "score": 1,
    },
    "B": {
      "text": "차분히 기다린다.",
      "type": "",
      "score": 0,
    },
  },
  4: {
    "title": "솔직히 <span class='half_HL'>주변을 둘러보면</span>",
    "A": {
      "text": "괜찮은 사람이 없다😟",
      "type": "",
      "score": -1,
    },
    "B": {
      "text": "가끔식 눈길이 가는 사람이 있다.",
      "type": "",
      "score": 1,
    },
  },
  5: {
    "title": "<span class='half_HL'>소개팅</span>이 들어왔다.",
    "A": {
      "text": "누군데? 이것저것 물어본다.",
      "type": "PO",
      "score": 1,
    },
    "B": {
      "text": "나 자만추인거 몰라?😒",
      "type": "",
      "score": -1,
    },
  },
  6: {
    "title": "썸인지 아닌지 <br><span class='half_HL'>햇갈리면 나는</span>,",
    "A": {
      "text": "포기한다😂",
      "type": "",
      "score": 0,
    },
    "B": {
      "text": "좀 더 다가간다🤭",
      "type": "AC",
      "score": 1,
    },
  },
  7: {
    "title":
      "평소 관심 있던 사람이<br><span class='half_HL'>술을 마시자고 한다</span>.",
    "A": {
      "text": "기회다🤩\n같이 마셔요!",
      "type": "",
      "score": 1,
    },
    "B": {
      "text": "밥은 어때요?\n천천히 알아가고 싶다.",
      "type": "CA",
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
      "type": "AW",
      "score": 1,
    },
  },
  9: {
    "title": "<span class='half_HL'>이상형</span>을 발견했을 때<br>나는",
    "A": {
      "text": "모 아니면 도!\n적극적으로 들이댄다.",
      "type": "",
      "score": 1,
    },
    "B": {
      "text": "스며드는 게 대세!\n주변을 맴돈다.",
      "type": "CA",
      "score": 0,
    },
  },
  10: {
    "title": "<span class='half_HL'>동아리에</span><br>뉴페이스가 보인다.",
    "A": {
      "text": "별 관심없다.",
      "type": "",
      "score": -1,
    },
    "B": {
      "text": "쟤 누구야?",
      "type": "PO",
      "score": 1,
    },
  },
  11: {
    "title": "이상형을 말하면<br><span class='half_HL'>친구들은 나에게</span><br>",
    "A": {
      "text": "“야 너 눈이 너무 낮은거 아니야? ”",
      "type": "AW",
      "score": 1,
    },
    "B": {
      "text": "“제발 주제파악좀 해ㅠㅠ”",
      "type": "",
      "score": 0,
    },
  },
  12: {
    "title":
      "썸남/썸녀에게 문자가 왔다.<br><span class='half_HL'>“같이 밥 먹을래요?”</span>",
    "A": {
      "text": "좋아요! 이곳저곳 맛집을 찾아본다.",
      "type": "AC",
      "score": 1,
    },
    "B": {
      "text": "그럴까요? 상대방이 먼저 골라주길 기다린다.",
      "type": "",
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

  let typeResult = quest[page_num][idValue]["type"];

  if (typeResult != null) finalResult[typeResult] += 1;
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

/*function post_to_url(path, params, method) {
  method = method || "post";
  const form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);
  for (const key in params) {
    const hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
}*/

function nextQuestion() {
  if (page_num == 13) {
    //post_to_url("/loading", finalResult);

    location.href = "result.html";
    loading_page.style.display = "flex";
    question_page.style.display = "none";
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
