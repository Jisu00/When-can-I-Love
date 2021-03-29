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
  1: {"title": "평소 들어가고 싶던 동아리가\n매일 친목활동 하는 걸 본\n나는", // 줄 바꿈 이상
      "A" : {
        "text" : "헐 나도 친해지고 싶어 ㅠ\n당장 신청서를 작성한다.",
        "type" : "E",
        "score" : 0
      },
      "B": {
        "text" : "잘 적응할 수 있을까..?\n살짝 고민된다.",
        "type" : "I",
        "score" : 0
      }
      
    },
  2: {"title": "친구와 여행가기 위해\n한껏 꾸민 날,\n지하철에서 헌팅을 당했다",
      "A": {
        "text" : "사이비인가? 의심부터 하며,\n접근한 의도를 재본다.",
        "type" : "N",
        "score" : 0
      }, 
      "B": {
        "text" : "내가 오늘 괜찮나?\n단순하게 생각한다.",
        "type" : "S",
        "score" : 0
      }
    },
  3: {"title": "친해지고 있는 친구와 대화 중 이야깃거리가 떨어졌다.",
      "A": {
        "text" : "안절부절하며, 최근 봤던 재밌는 게시물을 떠올리려 애쓴다.",
        "type" : "F",
        "score" : 0
      }, 
      "B": {
        "text" : "신경쓰지 않고 친구가 이야기하길 기다린다.",
        "type" : "T",
        "score" : 0
      }
    },
  4: {"title": "중요한 일정으로 꽉 찼다. 하지만 평소 친해지고 싶던 선배가 밥을 사준다고 한다.", 
      "A": {
        "text" : "이번주 말고 다음주는 어떠세요? 약속을 미룬다.",
        "type" : "J",
        "score" : 0
      }, 
      "B": {
        "text" : "헉 당장 만나요😳 어떻게든 시간을 낸다.",
        "type" : "P",
        "score" : 0
      }
    },
  5: {"title": "친구가 주변에 좋은 사람이 있다며 소개시켜준다고 한다.",
      "A": {
        "text" : "소개받아서 만나는 건 부담스럽다. 거절한다.",
        "type" : "",
        "score" : 0
      },
      "B": {
        "text" : "누군데? 성격은 어때? 어떻게 생겼어? 수락한다.",
        "type" : "",
        "score" : 0
      }
    },
  6: {"title": "나는 연애를 할 때,",
      "A": {
        "text" : "여러 사람을 짧게 만나는 타입이다.",
        "type" : "N",
        "score" : 0
      }, 
      "B": {
        "text" : "한 사람을 길게 만나는 타입이다.",
        "type" : "S",
        "score" : 0
      }
    },
  7: {"title": "평소 눈길이 갔던 이성이 술을 마시자고 한다.",
      "A": {
        "text" : "기회다! 당장 마시겠다고 한다. ",
        "type" : "E",
        "score" : 0
      }, 
      "B": {
        "text" : "천천히 알아가고 싶다. 술보단 밥을 먹자고 한다.",
        "type" : "I",
        "score" : 0
      },
    },
  8: {"title": "내 스타일은 아니지만, 나를 너무 좋아한다는 사람이 있다.",
      "A": {
        "text" : "굳이 눈을 낮춰가며 만나야하나? 만나지 않는다.",
        "type" : "T",
        "score" : 0
      }, 
      "B": {
        "text" : "나를 그렇게 좋아한다는데.. 만나면서 그 사람에 대해 알아가본다.",
        "type" : "F",
        "score" : 0
      }
    },
  9: {"title": "평소 원하던 이상형을 발견했을 때 나는", 
      "A": {
        "text" : "모 아니면 도! 들이대고 본다.",
        "type" : "E",
        "score" : 0
      }, 
      "B": {
        "text" : "천천히 스며드는 게 대세! 주변에서 맴돌며 서서히 가까워진다.",
        "type" : "I",
        "score" : 0
      }
    },
  10: {"title": "나만 빼고 모든 친구들이 연애를 시작했다.",
      "A": {
        "text" : "나도 연애하고 싶다.. 연애욕구가 샘솟는다.",
        "type" : "F",
        "score" : 0
      }, 
      "B": {
        "text" : "연애는 하고 싶지만, 막상 지금 당장 해야한다는 생각은 들지 않는다.",
        "type" : "T",
        "score" : 0
      }
    },
  11: {"title": "", 
      "A": {
        "text" : "",
        "type" : "",
        "score" : 0
      }, 
      "B": {
        "text" : "",
        "type" : "",
        "score" : 0
      }
    },
  12: {"title": "", 
      "A": {
        "text" : "",
        "type" : "",
        "score" : 0
      }, 
      "B" : {
        "text" : "",
        "type" : "",
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

    console.log(result_data);
    
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

  result_data["TYPE"]["I"] > result_data["TYPE"]["E"] ? text += "I" : text += "E";
  result_data["TYPE"]["S"] > result_data["TYPE"]["N"] ? text += "S" : text += "N";
  result_data["TYPE"]["F"] > result_data["TYPE"]["T"] ? text += "F" : text += "T";
  result_data["TYPE"]["J"] > result_data["TYPE"]["P"] ? text += "J" : text += "P";

  result_data["RESULT"] = text;
  delete result_data["TYPE"];

  alert(text);

  location.href = "../html/result.html";
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

    title.innerText = quest[page_num]["title"];
    A.innerText = quest[page_num]["A"]["text"];
    B.innerText = quest[page_num]["B"]["text"];

    // if(button_wrapper){
      setTimeout(()=>{
        A.addEventListener("click", clickFunction, {once: true});
        B.addEventListener("click", clickFunction, {once: true});
      }, 1000);
    //}

    p_num.innerText = `${page_num} / 12`;

    run_img.style.left = `${run_pos+=((ground.clientWidth - 33)/ 12)}px`;
    heart_img.style.opacity = `${heart_opa+=6}%`;
    page_num = 12; // 여기 나중에 바꾸기
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

