const TYPE = document.querySelector("#TYPE"),
  SCORE = document.querySelector("#SCORE"),
  rank_ment = document.querySelector("#rank_ment"),
  result_page = document.querySelector(".result_page"),
  explanation = document.querySelector(".explanation"),
  wait = document.querySelector("#wait_num"),
  after_explain = document.querySelector("#after_explain"),
  after = document.querySelector("#after");


const SCORETEXT = {
  1: "마음만 먹으면 당장 연애 하겠는데요?",
  2: "주변을 잘 살펴보면 이미 좋은 사람이 있을지도 몰라요!",
  3: "조금만 노력하면 금방 만날 수 있겠어요!",
  4: "조금 더 적극적으로 인연을 찾아볼까요?",
  5: "새로운 사람을 만날 준비가 조금 필요하겠네요"
}

const MBTITEXT = {
  "ISTP" : {
    1: "마음과 다르게 애정이 서툰 편이시군요!",
    2: "연애를 하면서도 관계에 대한 불안함을 늘 가지고 있는 편입니다",
    3: "다른 사람들에겐 쿨하지만, 내 연인에게 만큼은 집착이 있는 편입니다",
    4: "자신의 감정에 대한 표현이 정확한 사람에게 호감이 생기는 편입니다",
    5: "나를 사랑해주면서도 나의 사생활도 존중해줄 수 있는 사람이 좋겠네요!"
  },
  "ISTJ" : {
    1: "소개팅이나 미팅은 부담스러워 자만추를 선호하시는 편이군요!",
    2: "다른 부분이 아무리 마음에 들어도 예의가 없거나 도덕적이지 않으면 마음이 생기지 않습니다",
    3: "표현이 서툰 편이기 때문에 상대방은 자신을 좋아하는 것을 거의 알아채지 못합니다",
    4: "이상형으로는 과묵하고 책임감이 강한 사람이 될 수 있겠네요!"
  },
  "ISFP" : {
    1: "연애에 있어서 매우 신중한 편입니다",
    2: "자신을 리드해줄 수 있는 사람에게 마음이 가는 편입니다",
    3: "연애를 시작하게 되면, 상대방에게 어느정도 집착하는 면도 있습니다",
    4: "나의 개인적인 영역을 지켜줄 수 있는 사람이 좋겠네요!"
  },
  "ISFJ" : {
    1: "깊은 연애는 잘 하지 않아, 대부분 지루한 연애로 끝나는 경우가 많습니다",
    2: "연애를 하며 상대방에게 조금은 끌려다니는 면이 있습니다",
    3: "이상형으로는 성실하고 똑부러지는 사람이 좋겠네요!",
    4: "또한 내가 사랑해주는 만큼 돌려줄 수 있는 사람이 좋겠어요!"
  },
  "INTP" : {
    1: "쉽게 사랑에 빠지지 않지만, 한 번 빠지면 상대방에게 헌신적으로 마음을 쏟습니다",
    2: "보통 짧은 연애를 자주하며 이별 후유증이 심하진 않은 편입니다",
    3: "서로 취향이 비슷하고 말이 잘 통하는 사람에게 마음이 갑니다",
    4: "특히 끼를 부리거나 밀당을 많이 하는 사람을 싫어하는 편입니다"
  },
  "INTJ" : {
    1: "표현에 서툴고, 오랫동안 짝사랑을 해본 경험이 꽤 있는 편입니다",
    2: "감정적으로 행동을 해 서운해 하는 일이 꽤 많습니다",
    3: "어느정도 금사빠라 상대방에게 쉽게 호감을 느낍니다",
    4: "첫인상 그대로 한결같은 사람을 이상형으로 생각합니다"
  },
  "INFP" : {
    1: "보통 사랑에 쉽게 빠지는 편입니다",
    2: "인간 관계에 있어 상처를 많이 받아, 연애를 할 때에도 방어적인 태도를 보이는 경우가 많습니다",
    3: "서운한 것이 있으면 계속 참다가 한번 터지면 뒤돌아보지 않고 떠납니다",
    4: "자신을 사랑하는 티를 많이 내주는 사람을 좋아합니다",
    5: "상대방과 관심사나 개그 코드가 잘 맞아야 마음이 갑니다"
  },
  "INFJ" : {
    1: "조용하고 잔잔한 연애를 추구하는 스타일입니다",
    2: "상대방을 볼 때, 외적 요소를 특히 중요시 하는 편입니다",
    3: "도덕적이고 신뢰가 가는 사람에게 끌립니다",
    4: "또한 나를 이해해주고 챙겨줄 수 있는 다정한 성격을 좋아하실 것 같네요!"
  },
  "ESTJ" : {
    1: "연애를 할 때, 자신의 감정에 매우 솔직한 편입니다",
    2: "첫인상을 매우 중요하게 생각합니다",
    3: "나를 최고로 만들어주는 사람에게 마음이 가는 편이시네요!",
    4: "그러면서도 진중하고 깊은 대화가 가능한 사람을 선호하는 편입니다"
  },
  "ESFP" : {
    1: "연애를 시작하면, 연인을 무조건 1순위로 생각합니다",
    2: "사랑에 가장 열정적이지만, 의외로 이별에 대한 미련은 없는 편입니다",
    3: "연애할 때 연락을 자주 하는 사람을 선호합니다",
    4: "또한 자주 만날 수 있는 사람이 좋겠네요!",
    5: "선물을 받으면 상대에게 사랑을 확인 받는 느낌이 들기도 합니다"
  },
  "ESFJ" : {
    1: "주변에 이성 친구가 많으시네요!",
    2: "주로 알고 지냈던 친구와 연애를 시작하게 됩니다",
    3: "안정적이고 오랜 연애를 추구하는 편입니다",
    4: "적당히 선을 지킬 줄 알며, 먼저 다가와주는 사람에게 마음이 갑니다"
  },
  "ENTP" : {
    1: "항상 연애에 있어 경우의 수를 따지는 편입니다",
    2: "바람을 피울 확률이 꽤 높습니다",
    3: "말보단 행동이 먼저인 사람에게 끌립니다",
    4: "공감을 잘 해주며, 싸울 때는 져줄줄도 아는 사람이 이상형일 수 있겠군요!"
  },
  "ENTJ" : {
    1: "주도적으로 연애를 이끄는 편입니다",
    2: "일을 잘 하고 똑똑한 사람에게 끌립니다",
    3: "가벼운 관계보다 진중하게 시작하는 연애를 선호하는 편입니다"
  },
  "ENFP" : {
    1: "이성에게 인기가 많기 때문에 주변에 이성이 끊이질 않네요!",
    2: "첫인상이 좋아 소개팅이나 미팅에서 잘 될 확률이 높습니다",
    3: "나를 좋아해주는 사람보다 내가 좋아하는 사람이 좋습니다",
    4: "솔직하고, 같이 있으면 편한 사람에게 끌립니다"
  },
  "ESTP" : {
    1: "활동적이고 자유분방하며, 주변인들에게 관심이 많으시네요!",
    2: "연애를 시작하게 되면 누구보다 즐거움을 추구합니다",
    3: "자신만의 시간을 보장해줄 수 있는 사람을 좋아합니다",
    4: "상대방이 구속하려 하거나, 소유하려고 하면 멀어지려고 합니다"
  },
  "ENFJ" : {
    1: "사람에 대한 관심이 매우 많은 편이고, 사람 자체를 매우 좋아합니다",
    2: "적극적이고 추진력이 강한 편입니다",
    3: "상대방의 좋은 점을 찾아내려고 노력하며, 잘 맞춰줍니다",
    4: "먼저 다가와주고 얘기를 잘 들어주는 사람에게 끌리시네요!"
  }
}


function randomValue(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function fillExplanation(type) {
  let exText = "";

  for (let i=1; i<=Object.keys(MBTITEXT[type]).length; i++) {
    exText += `<li 
                  style="margin-bottom: 10px; 
                  list-style-position: inside;
                  text-indent: -20px;
                  padding-left: 20px;">
                  ${MBTITEXT[type][i]}
                </li>`;
  }

  explanation.innerHTML = exText;
}

function fillScoreText(score) {
  let date_num;
  let wait_num;
  let ment_num;

  if (score >= 13){
    ment_num = 1;
    date_num = randomValue(1, 7);
    wait_num = randomValue(1, 1000);
    text = `${date_num}일 뒤`;
  }
  else if (score >= 10){
    ment_num = 2;
    text = "한 달 이내";
    wait_num = randomValue(1001, 5000);
  }
  else if (score >= 7){
    ment_num = 3;
    date_num = randomValue(3, 12);
    wait_num = randomValue(5001, 20000);
    text = `${date_num}개월 뒤`;
  }
  else if (score >= 3){
    ment_num = 4;
    date_num = randomValue(1, 5);
    wait_num = randomValue(20001, 40000);
    text = `${date_num}년 뒤`;
  }
  else{
    ment_num = 5;
    text = "측정불가";
    after_explain.innerText = "연애 시작일 측정불가";
    after_explain.style.color = "red";
    wait_num = randomValue(40001, 529921);
  }

  wait.innerText = wait_num;
  rank_ment.innerText = SCORETEXT[ment_num];
  after.innerText = text;
}

function init() {
  tmp = location.href.split("?");
  data = tmp[1].split("/");
  type = data[0];
  score = data[1];

  fillExplanation(type);
  fillScoreText(score);
}

if (result_page) {
  init();
}
