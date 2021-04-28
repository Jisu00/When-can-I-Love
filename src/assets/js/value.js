const TYPE = document.querySelector("#TYPE"),
  SCORE = document.querySelector("#SCORE"),
  rank_ment = document.querySelector("#rank_ment1"),
  charName = document.querySelector(".char_name"),
  charPic = document.querySelector(".char_pic"),
  abilityTip = document.querySelector(".ability_tip"),
  result_page = document.querySelector(".result_page");

let finalResult = {
  "CA": 0,
  "PO": 0,
  "AC": 0,
  "AW": 0,
  "SCORE": 0,
};

const resultTitle = {
  "1": "벽돌 뚫고 하이킥",
  "2": "메이즈러너",
  "3": "위기탈출넘버원",
  "4": "방탈출매니아",
  "5": "길 잃은 아이",
  "6": "알카트라즈 수감자",
  "7": "무인도 원주민",
  "8": "미노타우루스",
  "9": "자유로운 영혼",
};

const getFromServer = () => {
  const serverData = document
    .querySelector(".result_server")
    .innerHTML.split("/");
  finalResult["SCORE"] = serverData[0];
  finalResult["CA"] = serverData[1];
  finalResult["PO"] = serverData[2];
  finalResult["AC"] = serverData[3];
  finalResult["AW"] = serverData[4];
};

const calResultTitle = () => {
  const score = finalResult["SCORE"];
  if (score == 12) {
    charName.innerText = resultTitle["1"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 10) {
    charName.innerText = resultTitle["2"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 8) {
    charName.innerText = resultTitle["3"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 6) {
    charName.innerText = resultTitle["4"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 4) {
    charName.innerText = resultTitle["5"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 2) {
    charName.innerText = resultTitle["6"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 0) {
    charName.innerText = resultTitle["7"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= -2) {
    charName.innerText = resultTitle["8"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score == -3) {
    charName.innerText = resultTitle["9"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  }
};

const resultAbility = {
  "1": "충분합니다. 뭘 더 하려고 하지마세요.",
  "2": "장난치신거죠? 그런거죠?",
  "CA": {
    "1": "작작 경계하세요. 사람 그렇게 의심하는거 아닙니다.",
  },
};

const calResultAbility = () => {
  const CA = finalResult["CA"];
  const PO = finalResult["PO"];
  const AC = finalResult["AC"];
  const AW = finalResult["AW"];
  if (CA == 3 && PO == 3 && AC == 3 && AW == 3)
    abilityTip.innerText = resultAbility["1"];
  else if (CA == 0 && PO == -3 && AC == 0 && AW == 0)
    abilityTip.innerText = resultAbility["2"];
  else {
    if (CA <= 4) abilityTip.innerText = resultAbility["CA"]["1"];
  }
};

function init() {
  getFromServer();
  calResultTitle();
  calResultAbility();
}

if (result_page) {
  init();
}
