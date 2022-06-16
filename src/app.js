import i18next from 'i18next';
import onChange from 'on-change';
import ru from './ru.js';
import en from './en.js';
import { staticRender } from './render';

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
      playerScores: 0,
      compluterScores: 0,
      playerChoice: '',
      computerChoece: '',
    }
  };

  const makeComputerStep = (state) => gameCards[Math.floor(3*Math.random())];

  const gameWatcher = onChange(state, (path, value) => {
    if (path == 'gameplay.playerChoice') {
      console.log(makeComputerStep(state));
      state.gameplay.playerChoice = '';
    }    
  })

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
    gameWatcher.gameplay.playerChoice = target.id;
  }));  
};
