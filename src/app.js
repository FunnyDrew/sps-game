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
  },
};

const winLoseInfoMap = {
  rock: {
    rock: 'draw',
    paper: 'paperBitsRock',
    scissors: 'rockBitsScissors',
  },
  paper: {
    rock: 'paperBitsRock',
    paper: 'draw',
    scissors: 'scissorsCutPaper',
  },
  scissors: {
    rock: 'rockBitsScissors',
    paper: 'scissorsCutPaper',
    scissors: 'draw',
  },
};

export default () => {
  const state = {
    ui: {
      lng: 'ru',
    },
    states: {
      intro: 'active',
      gameplay: 'disactive',
      outro: 'disactive',
    },
    gameplay: {
      step: { madeStep: false },
      playerScores: 0,
      computerScores: 0,
      info: '',
      playerChoice: '',
      computerChoice: '',
    },
  };

  staticRender(i18);
  gamePlayRender(state, i18);

  const makeComputerStep = () => gameCards[Math.floor(3 * Math.random())];

  const stateWatcher = onChange(state.states, (path) => {
    if (path === 'gameplay') {
      const gameIntro = document.querySelector('.game-intro');
      const gameOutro = document.querySelector('.game-outro');
      gameIntro.classList.remove('active');
      gameOutro.classList.remove('active');
      state.states.intro = 'disactive';
      state.states.outro = 'disactive';

      state.gameplay.playerScores = 0;
      state.gameplay.computerScores = 0;
      state.gameplay.info = '';
      state.gameplay.playerChoice = '';
      state.gameplay.computerChoice = '';
      staticRender(i18);
      gamePlayRender(state, i18);
    }
    if (path === 'outro') {
      state.states.gameplay = 'disactive';
      const gameOutro = document.querySelector('.game-outro');
      gameOutro.classList.add('active');
    }
  });

  const gameWatcher = onChange(state.gameplay.step, (previousValue) => {
    gamePlayRender(state, i18);
    state.gameplay.step.madeStep = previousValue;
  });

  const lngSwitcher = document.querySelector('button.lng-main');
  lngSwitcher.addEventListener('click', (e) => {
    e.preventDefault();
    state.ui.lng = state.ui.lng === 'ru' ? 'en' : 'ru';
    i18.changeLanguage(state.ui.lng);
    staticRender(i18);
    gamePlayRender(state, i18);
  });

  const gameStarter = document.querySelector('button.game-start');
  gameStarter.addEventListener('click', (e) => {
    e.preventDefault();
    stateWatcher.gameplay = 'active';
  });

  const gameStartLngSwitcher = document.querySelector('button.lng.corner');
  gameStartLngSwitcher.addEventListener('click', (e) => {
    e.preventDefault();
    state.ui.lng = state.ui.lng === 'ru' ? 'en' : 'ru';
    i18.changeLanguage(state.ui.lng);
    staticRender(i18);
    gamePlayRender(state, i18);
  });

  const gameAgain = document.querySelector('.game-again');
  gameAgain.addEventListener('click', (e) => {
    e.preventDefault();
    stateWatcher.gameplay = 'active';
  });

  const gameBtn = document.querySelectorAll('.game-cards > button');
  gameBtn.forEach((btn) => btn.addEventListener('click', ({ target }) => {
    state.gameplay.playerChoice = target.id;

    state.gameplay.computerChoice = makeComputerStep();
    const [currentPlayerScore, currentComputerScore] = winLoseMap[state.gameplay.playerChoice][
      state.gameplay.computerChoice];
    state.gameplay.playerScores += currentPlayerScore;
    state.gameplay.computerScores += currentComputerScore;

    if (state.gameplay.playerScores >= 5 || state.gameplay.computerScores >= 5) {
      stateWatcher.outro = 'active';
    }
    state.gameplay.info = winLoseInfoMap[state.gameplay.playerChoice][
      state.gameplay.computerChoice];
    gameWatcher.madeStep = true;
  }));
};
