const DICTIONARY = {
  bai4: ['拜'],
  bang1: ['幫'],
  bao3: ['寶'],
  bi3: ['比'],
  bu4: ['不'],
  chang2: ['常'],
  chang3: ['場'],
  chu1: ['出'],
  dao4: ['道'],
  deng1: ['燈'],
  di4: ['第'],
  duan4: ['段'],
  fan4: ['飯'],
  fen1: ['分'],
  guan3: ['館'],
  guang4: ['逛'],
  guo2: ['國'],
  guo4: ['過'],
  hai2: ['還'],
  he2: ['合'],
  hen3: ['很'],
  hong2: ['紅'],
  hou4: ['後'],
  huan1: ['歡'],
  jiao4: ['較'],
  jie1: ['街'],
  jie2: ['捷'],
  jin4: ['近'],
  jiu4: ['就'],
  ke3: ['可'],
  kou3: ['口'],
  lai2: ['來'],
  li3: ['禮'],
  lu4: ['路', '綠'],
  mang2: ['忙'],
  me: ['麼'],
  mei2: ['沒'],
  mi2: ['迷'],
  mian4: ['麵'],
  na2: ['拿'],
  neng2: ['能'],
  pei2: ['陪'],
  peng2: ['朋'],
  ping2: ['平'],
  qi3: ['起'],
  qu3: ['取'],
  qu4: ['去'],
  sai4: ['賽'],
  she4: ['舍'],
  shi4: ['適'],
  shu1: ['書'],
  su4: ['宿'],
  ta: ['她'],
  ting1: ['聽'],
  tu2: ['圖'],
  wang3: ['往'],
  wei4: ['味'],
  xi3: ['喜'],
  xu1: ['需'],
  yan2: ['言'],
  yang4: ['樣'],
  yao4: ['要'],
  yi1: ['一'],
  yi3: ['以'],
  you4: ['右'],
  yu3: ['語'],
  yuan3: ['遠'],
  yun4: ['運'],
  zen3: ['怎'],
  zhe4: ['這'],
  zhi1: ['知'],
  zhi2: ['直'],
  zhi3: ['只'],
  zhong1: ['鐘'],
  zhou1: ['週'],
  zhu1: ['珠'],
  zhuan3: ['轉'],
  zou3: ['走'],
  zuo3: ['左'],
};

let WORDS = Object.values(DICTIONARY);

const character = document.getElementById('character');
const input = document.getElementById('input');
const form = document.getElementById('form');

const fetchRandomIndex = (dictionary) => Math.floor(Math.random() * (dictionary.length));

const submitAnswer = (e) => {
  e.preventDefault();
  const isCorrect = DICTIONARY[e.currentTarget[0].value] && 
                    DICTIONARY[e.currentTarget[0].value].indexOf(character.innerText) > -1;

  e.currentTarget[0].value = '';

  if (!isCorrect) {
    character.style.setProperty('color', 'red');
    return;
  }

  character.style.setProperty('color', 'black');
  delete DICTIONARY[e.currentTarget[0].value];
  WORDS = Object.values(DICTIONARY);

  if (WORDS.length > 0) {
    const pinyinIndex = fetchRandomIndex(WORDS);
    const characterIndex = fetchRandomIndex(WORDS[pinyinIndex]);
    character.innerText = WORDS[pinyinIndex][characterIndex];
  } else {
    character.innerText = 'Finished!';  
  }
};

form.addEventListener('submit', submitAnswer);

const pinyinIndex = fetchRandomIndex(WORDS);
const characterIndex = fetchRandomIndex(WORDS[pinyinIndex]);
character.innerText = WORDS[pinyinIndex][characterIndex];
