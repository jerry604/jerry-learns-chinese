const DICTIONARY = {
  bai4: ['拜'],
  bao3: ['寶'],
  bi3: ['比'],
  chang2: ['常'],
  chang3: ['場'],
  chu1: ['出'],
  fan4: ['飯'],
  guang4: ['逛'],
  he2: ['合'],
  hen3: ['很'],
  huan1: ['歡'],
  jiao4: ['較'],
  jie1: ['街'],
  li3: ['禮'],
  mian4: ['麵'],
  na2: ['拿'],  
  pei2: ['陪'],
  peng2: ['朋'],
  ping2: ['平'],
  qu3: ['取'],
  qu4: ['去'],
  sai4: ['賽'],
  shi4: ['適'],
  ta: ['她'],
  xi3: ['喜'],
  wei4: ['味'],
  yang4: ['樣'],
  zhe4: ['這'],
  zhou1: ['週'],
  zhu1: ['珠'],
};

let WORDS = Object.values(DICTIONARY);

const character = document.getElementById('character');
const input = document.getElementById('input');
const form = document.getElementById('form');

const fetchRandomIndex = (dictionary) => Math.floor(Math.random() * (dictionary.length));

const submitAnswer = (e) => {
  e.preventDefault();

  if (DICTIONARY[e.currentTarget[0].value].indexOf(character.innerText) > -1) {
    delete DICTIONARY[e.currentTarget[0].value];
    WORDS = Object.values(DICTIONARY);

    if (WORDS.length > 0) {
      const pinyinIndex = fetchRandomIndex(WORDS);
      const characterIndex = fetchRandomIndex(WORDS[pinyinIndex]);
      character.innerText = WORDS[pinyinIndex][characterIndex];
    } else {
      character.innerText = 'Finished!';  
    }
  }

  e.currentTarget[0].value = '';
};

form.addEventListener('submit', submitAnswer);

const pinyinIndex = fetchRandomIndex(WORDS);
const characterIndex = fetchRandomIndex(WORDS[pinyinIndex]);
character.innerText = WORDS[pinyinIndex][characterIndex];
