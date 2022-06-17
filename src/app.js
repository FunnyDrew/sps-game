import i18next from 'i18next';
import onChange from 'on-change';
import ru from './ru.js';
import en from './en.js';
import { staticRender, gamePlayRender } from './render';

const i18 = i18next.createInstance();
i18.init({
  lng: 'ru',
  debug: true,
  resources: {
    en,
    ru,
  },
});

const gameCards = ['rock', 'paper', 'scissors'];

const winLoseMap = {
  rock: {
    rock: [0, 0],
    paper: [0, 1],
    scissors: [1, 0],
  },
  paper: {
    rock: [1, 0],
    paper: [0, 0],
    scissors: [0, 1],
  },
  scissors: {
    rock: [0, 1],
    paper: [1, 0],
    scissors: [0, 0],
  }
}


export default () => {
  const state = {
    ui: {
      lng: 'ru',
    },
    intro: {
      active: false,
    },
    outro: {
      active: false,
    },
    gameplay: {
      step: {madeStep: false},
      playerScores: 0,
      computerScores: 0,
      playerChoice: '',
      computerChoice: '',
    }
  };

  const makeComputerStep = () => gameCards[Math.floor(3*Math.random())];

  const gameWatcher = onChange(state.gameplay.step, (path, value) => {
    gamePlayRender(state, i18);
    state.gameplay.step.madeStep = false;
  });

  staticRender(i18);

  const lngSwitcher = document.querySelector('button.lng-main');
  lngSwitcher.addEventListener('click', (e) => {
    e.preventDefault();
    state.ui.lng = state.ui.lng === 'ru' ? 'en' : 'ru';
    i18.changeLanguage(state.ui.lng);
    staticRender(i18);
  });

  const gameBtn = document.querySelectorAll('.game-cards > button');
  gameBtn.forEach((btn) => btn.addEventListener('click',({target}) =>{

    state.gameplay.playerChoice = target.id;

    state.gameplay.computerChoice = makeComputerStep();
    const [currentPlayerScore, currentComputerScore] = winLoseMap[state.gameplay.playerChoice][state.gameplay.computerChoice];
    state.gameplay.playerScores += currentPlayerScore;
    state.gameplay.computerScores += currentComputerScore;
    gameWatcher.madeStep = true;
  }));  
};
