const DICTIONARY = {
  xi: "喜",
  huan: "歡",
  bi: "比",
  jiao: "較",
  shi: "適",
  he: "合",
  mian: "麵",
  fan: "飯",
  wei: "味",
  ping: "平",
  chang: "常",
  zhe: "這",
  yang: "樣",
  hen: "很",
  qu: "取",
  na: "拿",
};

const WORDS = Object.values(DICTIONARY);

const character = document.getElementById("character");
const input = document.getElementById("input");
const form = document.getElementById("form");

const fetchRandomIndex = () => Math.floor(Math.random() * (WORDS.length));
const submitAnswer = (e) => {
  e.preventDefault();

  if (DICTIONARY[e.target[0].value] === character.innerText) {
    character.innerText = WORDS[fetchRandomIndex()];
  }

  input.value = "";
};

form.addEventListener("submit", submitAnswer);
character.innerText = WORDS[fetchRandomIndex()];
