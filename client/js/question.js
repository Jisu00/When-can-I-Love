const question_page= document.querySelector(".question_page"),
      question_wrapper = document.querySelector(".question_wrapper"),
      title = document.querySelector(".question_title"),
      btn_wrapper = document.querySelector(".question_btn_wrapper"),
      A = document.querySelector("#A"),
      B = document.querySelector("#B");
const loading_page = document.querySelector(".loading_page");
const p_num = document.querySelector("#p_num");
const run_img = document.querySelector("#run");
const heart_img = document.querySelector("#heart");
const ground = document.querySelector("#ground");

let page_num = 1;
let run_pos = 1;
let heart_opa = 5;

let result_data = { 
  "TYPE" : {
    "E" : 0, "I" : 0,
    "S" : 0, "N" : 0,
    "T" : 0, "F" : 0,
    "J" : 0, "P" : 0
  },

  "RESULT" : "",
  "score" : 0
}

let quest = { //page num
  1: {"title": "한껏 꾸민 날,<br><span class='half_HL'>번호를 따였다.</span>",
      "A" : {
        "text" : "괜찮은데? 번호를 준다.",
        "type" : "E",
        "score" : 1
      },
      "B": {
        "text" : "뭐지? 누구지? 왜 물어보지?",
        "type" : "I",
        "score" : 0
      }
      
    },
  2: {"title": "<span class='half_HL'>재미있어 보이는 대화</span>" ,
      "A": {
        "text" : "참여한다.",
        "type" : "E",
        "score" : 1
      }, 
      "B": {
        "text" : "관심 없다.",
        "type" : "I",
        "score" : 0
      }
    },
  3: {"title": "썸남/썸녀와의 대화 도중<br><span class='half_HL'>어색한 침묵</span>이 흐른다. ",
      "A": {
        "text" : "펜트 하우스 보셨어요?",
        "type" : "F",
        "score" : 1
      }, 
      "B": {
        "text" : "차분히 기다린다.",
        "type" : "T",
        "score" : 0
      }
    },
  4: {"title": "썸남/썸녀에게 문자가 왔다.<br><span class='half_HL'>“같이 밥 먹을래요?”</span>", 
      "A": {
        "text" : "언제 만날까요? 어디서 볼까요?",
        "type" : "J",
        "score" : 0
      }, 
      "B": {
        "text" : "좋아요! 장소나 시간은 당일에!",
        "type" : "P",
        "score" : 0
      }
    },
  5: {"title": "<span class='half_HL'>소개팅</span>이 들어왔다.",
      "A": {
        "text" : "누군데? 이것저것 물어본다.",
        "type" : "",
        "score" : 2
      },
      "B": {
        "text" : "나 자만추인거 몰라?😒",
        "type" : "",
        "score" : 0
      }
    },
  6: {"title": "나는 <span class='half_HL'>연애를 할 때</span>,",
      "A": {
        "text" : "여러 사람을 짧게 만난다.",
        "type" : "N",
        "score" : 2
      }, 
      "B": {
        "text" : "한 사람을 길게 만난다.",
        "type" : "S",
        "score" : 0
      }
    },
  7: {"title": "평소 관심 있던 사람이<br><span class='half_HL'>술을 마시자고 한다</span>.",
      "A": {
        "text" : "기회다🤩\n같이 마셔요!",
        "type" : "E",
        "score" : 1
      }, 
      "B": {
        "text" : "밥은 어때요?\n천천히 알아가고 싶다.",
        "type" : "I",
        "score" : 0
      },
    },
  8: {"title": "내 스타일은 아닌데<br><span class='half_HL'>나를 너무 좋아한다.</span>",
      "A": {
        "text" : "굳이 눈을 낮춰서..🤔?",
        "type" : "",
        "score" : -1
      }, 
      "B": {
        "text" : "나를 그렇게 좋아한다는데..😥",
        "type" : "",
        "score" : 2
      }
    },
  9: {"title": "<span class='half_HL'>이상형</span>을<br>발견했을 때 나는", 
      "A": {
        "text" : "모 아니면 도!\n번호를 묻는다.",
        "type" : "E",
        "score" : 2
      }, 
      "B": {
        "text" : "천천히 스며드는 게 대세!\n주변을 맴돈다.",
        "type" : "I",
        "score" : 0
      }
    },
  10: {"title": "<span class='half_HL'>나만 빼고</span> 모든 친구들이<br>연애를 시작했다.",
      "A": {
        "text" : "부럽다 나도 연애할래!",
        "type" : "",
        "score" : 2
      }, 
      "B": {
        "text" : "별로 신경 쓰이지 않는다.",
        "type" : "",
        "score" : -1
      }
    },
  11: {"title": "<span class='half_HL'>“오늘 데이트 어땠어?”</span><br>라는 질문에 나는", 
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
  12: {"title": "애인의 <span class='half_HL'>생일 선물</span>을 살 때,", 
      "A": {
        "text" : "가격, 브랜드를 하나하나 비교한다.",
        "type" : "J",
        "score" : 0
      }, 
      "B" : {
        "text" : "일단 이걸로 찜하자.",
        "type" : "P",
        "score" : 0
      }
    }
}

////////////////////////////////////////////////////////////


function removeFadeIn(){
  question_wrapper.classList.remove("fade_in");
  btn_wrapper.classList.remove("fade_in");
}

function clickFunction(e){
  let idValue = e.target.id;

  A.disabled = "true"; B.disabled = "true";
        
  if (idValue != ""){
    let type_result = quest[page_num][idValue]["type"];

    result_data["TYPE"][type_result] += 1;
    result_data["score"] += quest[page_num][idValue]["score"];

    //console.log(result_data);
    
    // animation

    setTimeout(()=>{
      e.target.classList.add("bold");
    }, 100);

    e.target.classList.add("magnifyBorder");
    setTimeout(()=>{
      e.target.classList.remove("magnifyBorder");
      e.target.classList.remove("bold");
      page_num++;

      A.removeAttribute("disabled");
      B.removeAttribute("disabled");
      
      next();
    }, 700);
  
  }
}

function checkTypeAndSend(){
  let text = "";

  result_data["TYPE"]["I"] > result_data["TYPE"]["E"] ? text += "0" : text += "1";
  result_data["TYPE"]["S"] > result_data["TYPE"]["N"] ? text += "2" : text += "3";
  result_data["TYPE"]["T"] > result_data["TYPE"]["F"] ? text += "4" : text += "5";
  result_data["TYPE"]["J"] > result_data["TYPE"]["P"] ? text += "6" : text += "7";

  result_data["RESULT"] = text;
  delete result_data["TYPE"];

  location.href = "../html/result.html?" + text + "/" + result_data["score"];
}

function next(){
  if (page_num == 13){
    //loading_page.classList.add("loadingStart");
    loading_page.style.display = "flex";
    question_page.style.display = "none";

    checkTypeAndSend();
  }
  else{
    btn_wrapper.style.opacity = "0";
    question_wrapper.classList.add("fade_in");

    setTimeout(()=>{
      btn_wrapper.classList.add("fade_in");
      btn_wrapper.style.opacity = "1";
      setTimeout(removeFadeIn, 500);
    }, 500);

    title.innerHTML = quest[page_num]["title"];
    A.innerText = quest[page_num]["A"]["text"];
    B.innerText = quest[page_num]["B"]["text"];

    // if(btn_wrapper){
      setTimeout(()=>{
        A.addEventListener("click", clickFunction, {once: true});
        B.addEventListener("click", clickFunction, {once: true});
      }, 1000);
    //}

    p_num.innerText = `${page_num} / 12`;

    run_img.style.left = `${run_pos+=((ground.clientWidth - 33)/ 12)}px`;
    heart_img.style.opacity = `${heart_opa+=6}%`;
    // page_num = 12; // 여기 나중에 바꾸기
  }
}

function init(){
  let flag = 1;

  loading_page.style.display = "none";

  setInterval(()=>{
    if (flag == 1) heart_img.style.transform = "scale(1)";
    else heart_img.style.transform = "scale(0.9)";
    
    flag*=-1;
  }, 1000);
  next();
}

/*if (question_page){
  init();
}*/

init();

