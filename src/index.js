//import i18next from "i18next";
import './style.css'
const i18next = require('i18next');

i18next.init({
  lng: 'ru', // Текущий язык
  debug: true,
  resources: {
    ru: { // Тексты конкретного языка
      translation: { // Так называемый namespace по умолчанию
        key: 'Привет мир!',
      },
    },
    en: {
      translation: {
        key: 'Hello world',
      }
    }
  },
});
console.log(i18next.t('key'));
i18next.changeLanguage('en');
console.log(i18next.t('key'));

const buttons = document.querySelectorAll('button.game');

const playerScoresDiv = document.querySelector('.player-scores');
const computerScoresDiv = document.querySelector('.computer-scores');

const playerChooseDiv = document.querySelector('.player-choose');
const computerChooseDiv = document.querySelector('.computer-choose');
const btnStart = document.querySelector('.start');

const layout = document.querySelector('.layout-black');

let playerScores = 0;
let computerScores = 0;

const initGame = () => {
  playerScores = 0;
  computerScores = 0;

  playerScoresDiv.textContent = 0;
  computerScoresDiv.textContent = 0;

  playerChooseDiv.textContent = '';
  computerChooseDiv.textContent = '';
  layout.classList.toggle('active', false);
  btnStart.classList.toggle('active', false);
};

const playMap = [
  [0, 'c', 'p'],
  ['p', 0, 'c'],
  ['c', 'p', 0],
];
const variants = ['rock', 'paper', 'scissors'];
const mapToScore = { 0: [0, 0], p: [1, 0], c: [0, 1] };

const makeStep = () => Math.floor(Math.random() * 3);
const emojiMap = { rock: '👊', paper: '🤚', scissors: '✌️' };

initGame();

btnStart.addEventListener('click', (e) => {
  e.preventDefault();
  initGame();
});

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const playerChoose = variants.indexOf(e.target.id);
    const computerChoose = makeStep();

    playerChooseDiv.textContent = emojiMap[e.target.id];
    computerChooseDiv.textContent = emojiMap[variants[computerChoose]];

    const [playerScore, computerScore] =
      mapToScore[playMap[playerChoose][computerChoose]];
    playerScores += playerScore;
    computerScores += computerScore;
    playerScoresDiv.textContent = playerScores;
    computerScoresDiv.textContent = computerScores;

    if (playerScores === 5 || computerScores === 5) {
      playerScoresDiv.textContent = playerScores;
      computerScoresDiv.textContent = computerScores;
      layout.classList.add('active');

      btnStart.classList.add('active');
    }
  })
);
