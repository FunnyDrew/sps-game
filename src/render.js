import './style.css';

const staticRender = (i18) => {
  const title = document.querySelector('title');
  title.textContent = i18.t('title');

  const header = document.querySelector('header > p');
  header.textContent = i18.t('ui.header');

  const lngBtnStart = document.querySelector('button.lng');
  lngBtnStart.textContent = i18.t('ui.lng');

  const lngBtnMain = document.querySelector('button.lng-main');
  lngBtnMain.textContent = i18.t('ui.lng');

  const gamePlayTitle = document.querySelector('.game-play-title');
  gamePlayTitle.textContent = i18.t('ui.gamePlayTitle');

  const scoresPlayTitle = document.querySelector('.scores-play-title');
  scoresPlayTitle.textContent = i18.t('ui.scoresPlayTitle');

  const playerName = document.querySelector('.player-scores');
  playerName.textContent = i18.t('ui.playerScoresTitle');

  const computerName = document.querySelector('.computer-scores-title');
  computerName.textContent = i18.t('ui.computerScoresTitle');

  const playerChoiceTitle = document.querySelector('.players-choice-title');
  playerChoiceTitle.textContent = i18.t('ui.playersChoiceTitle');

  const gameCardsTitle = document.querySelector('.game-cards-title');
  gameCardsTitle.textContent = i18.t('ui.gameCardsTitle');

  const gameCardsInfo = document.querySelector('.game-cards-info');
  gameCardsInfo.textContent = `(${i18.t('ui.gameCardsInfo')})`;
};

const fcn = () => {};

export { staticRender, fcn };
