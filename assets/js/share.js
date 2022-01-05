const twitter = document.querySelector(".twitter"),
      facebook = document.querySelector(".facebook"),
      kakao = document.querySelector(".kakao");

const sendUrl = "https://jisu00.github.io/MBTI-When_can_I_Love/views/start.html"

twitter.addEventListener("click", ()=>{
  const sendText = "언제쯤 연애할 수 있을까?";
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
});

facebook.addEventListener("click", ()=>{
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
})