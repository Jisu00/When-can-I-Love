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
  1: {"title": "평소 들어가고 싶던 동아리가<br>매일 <span class='half_HL'>친목 활동</span> 하는 걸 본 나는", // 줄 바꿈 이상
      "A" : {
        "text" : "헐 나도 친해지고 싶어😥\n당장 신청서를 작성한다.",
        "type" : "E",
        "score" : 5
      },
      "B": {
        "text" : "잘 적응할 수 있을까..?\n살짝 고민된다.",
        "type" : "I",
        "score" : 0
      }
      
    },
  2: {"title": "간만의 외출로 한껏 꾸민 날,<br>지하철에서 <span class='half_HL'>헌팅</span>을 받았다." ,
      "A": {
        "text" : "크 역시 꾸민 건 알아보네.",
        "type" : "",
        "score" : 5
      }, 
      "B": {
        "text" : "뭐지? 누구지? 왜 물어보지? ",
        "type" : "",
        "score" : 0
      }
    },
  3: {"title": "썸남/썸녀와의 대화 도중<br><span class='half_HL'>어색한 침묵</span>이 흐른다. ",
      "A": {
        "text" : "최근 봤던 재밌는 영상을\n떠올리려 애쓴다.",
        "type" : "F",
        "score" : 3
      }, 
      "B": {
        "text" : "차분히 그 사람이\n이야기하길 기다린다.",
        "type" : "T",
        "score" : 1
      }
    },
  4: {"title": "평소 호감이 가는 이성에게<br>문자가 왔다.<br><span class='half_HL'>“같이 밥 먹을래요?”</span>", 
      "A": {
        "text" : "언제 만날까요? 어디서 볼까요?",
        "type" : "J",
        "score" : 2
      }, 
      "B": {
        "text" : "좋아요! 장소나 시간은 당일에!",
        "type" : "P",
        "score" : 0
      }
    },
  5: {"title": "친구가 주변에<br>좋은 사람이 있다며<br><span class='half_HL'>소개</span>시켜준다고 한다.",
      "A": {
        "text" : "누군데? 이것저것 물어본다.",
        "type" : "",
        "score" : 5
      },
      "B": {
        "text" : "소개받아서 만나는 건 조금 부담스럽다.",
        "type" : "",
        "score" : 0
      }
    },
  6: {"title": "나는 <span class='half_HL'>연애를 할 때</span>,",
      "A": {
        "text" : "여러 사람을 짧게 만나는 타입이다.",
        "type" : "N",
        "score" : 0
      }, 
      "B": {
        "text" : "한 사람을 길게 만나는 타입이다.",
        "type" : "S",
        "score" : 1
      }
    },
  7: {"title": "평소 관심 있던 사람이<br><span class='half_HL'>술을 마시자고 한다</span>.",
      "A": {
        "text" : "기회다! 당장 마시겠다고 한다. ",
        "type" : "E",
        "score" : 5
      }, 
      "B": {
        "text" : "천천히 알아가고 싶다.\n술보단 밥을 먹자고 한다.",
        "type" : "I",
        "score" : 2
      },
    },
  8: {"title": "내 스타일은 아니지만,<br><span class='half_HL'>나를 너무 좋아한다는<br>사람</span>이 있다.",
      "A": {
        "text" : "굳이 눈을 낮춰가며 만나야하나?\n만나지 않는다.",
        "type" : "T",
        "score" : -3
      }, 
      "B": {
        "text" : "나를 그렇게 좋아한다는데..\n만나면서 그 사람에 대해 알아가본다.",
        "type" : "F",
        "score" : 3
      }
    },
  9: {"title": "평소 원하던 <span class='half_HL'>이상형</span>을<br>발견했을 때 나는", 
      "A": {
        "text" : "모 아니면 도!\n마음에 든다며 전화번호를 묻는다.",
        "type" : "E",
        "score" : 5
      }, 
      "B": {
        "text" : "천천히 스며드는 게 대세!\n주변에서 맴돌기 시작한다.",
        "type" : "I",
        "score" : 2
      }
    },
  10: {"title": "<span class='half_HL'>나만 빼고</span> 모든 친구들이<br>연애를 시작했다.",
      "A": {
        "text" : "나도 연애할래!\n연애세포가 꿈틀거린다.",
        "type" : "",
        "score" : 2
      }, 
      "B": {
        "text" : "그래서?\n별로 신경 쓰이지 않는다.",
        "type" : "",
        "score" : -5
      }
    },
  11: {"title": "애인의 <span class='half_HL'>“오늘 데이트 어땠어?”</span><br>라는 질문에 나는", 
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
        "score" : 2
      }, 
      "B" : {
        "text" : "일단 이걸로 찜하자.\n상품만 우선 정해놓는다.",
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

