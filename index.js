const DICTIONARY = {
  xi3: '喜',
  huan1: '歡',
  bi3: '比',
  jiao4: '較',
  shi4: '適',
  he2: '合',
  mian4: '麵',
  fan4: '飯',
  wei4: '味',
  ping2: '平',
  chang2: '常',
  zhe4: '這',
  yang4: '樣',
  hen3: '很',
  qu3: '取',
  na2: '拿',
};

let WORDS = Object.values(DICTIONARY);

const character = document.getElementById('character');
const input = document.getElementById('input');
const form = document.getElementById('form');

const fetchRandomIndex = () => Math.floor(Math.random() * (WORDS.length));
const submitAnswer = (e) => {
  e.preventDefault();

  if (DICTIONARY[e.currentTarget[0].value] === character.innerText) {
    delete DICTIONARY[e.currentTarget[0].value];
    WORDS = Object.values(DICTIONARY);
    character.innerText = WORDS.length > 0 ? WORDS[fetchRandomIndex()] : 'Finished!';
  }

  e.currentTarget[0].value = '';
};

form.addEventListener('submit', submitAnswer);

character.innerText = WORDS[fetchRandomIndex()];
