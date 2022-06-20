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

  const gameInfoName = document.querySelector('.game-info-name');
  gameInfoName.textContent = i18.t('gameInfo.gameInfoName');

  const gameInfoMake = document.querySelector('.game-info-make');
  gameInfoMake.textContent = i18.t('gameInfo.gameInfoMake');

  const gameInfoRS = document.querySelector('.game-info-rs');
  gameInfoRS.textContent = i18.t('gameInfo.gameInfoRS');

  const gameInfoSP = document.querySelector('.game-info-sp');
  gameInfoSP.textContent = i18.t('gameInfo.gameInfoSP');

  const gameInfoPR = document.querySelector('.game-info-pr');
  gameInfoPR.textContent = i18.t('gameInfo.gameInfoPR');

  const gameInfoWin = document.querySelector('.game-info-win');
  gameInfoWin.textContent = i18.t('gameInfo.gameInfoWin');

  const gameStartBtn = document.querySelector('button.game-start');
  gameStartBtn.textContent = i18.t('gameStartBtn');

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

const gamePlayRender = (state, i18) => {
  const playerChoiceUI = document.querySelector('.player-choice');
  playerChoiceUI.textContent = state.gameplay.playerChoice === ''
    ? ''
    : i18.t(`gameCards.${state.gameplay.playerChoice}`);
  const computerChoiceUI = document.querySelector('.computer-choice');
  computerChoiceUI.textContent = state.gameplay.computerChoice === ''
    ? ''
    : i18.t(`gameCards.${state.gameplay.computerChoice}`);

  const playerScores = document.querySelector('.player-scores > p');
  playerScores.textContent = state.gameplay.playerScores;
  const computerScores = document.querySelector('.computer-scores > p');
  computerScores.textContent = state.gameplay.computerScores;

  const gamePlayContent = document.querySelector('.game-play-content');

  gamePlayContent.textContent = state.gameplay.info === ''
    ? ''
    : i18.t(`ui.${state.gameplay.info}`);

  const gameAgain = document.querySelector('.game-again');
  gameAgain.textContent = i18.t('gameAgainBtn');

  const gameResultInfo = document.querySelector('.game-result-info > p');

  const winner = state.gameplay.playerScores
    > state.gameplay.computerScores
    ? 'you'
    : 'computer';

  gameResultInfo.textContent = i18.t(`result.${winner}`);

  const gameResultantScores = document.querySelector('.vs-scores');
  gameResultantScores.textContent = state.gameplay.playerScores
    > state.gameplay.computerScores
    ? `${state.gameplay.playerScores}:${state.gameplay.computerScores}`
    : `${state.gameplay.computerScores}:${state.gameplay.playerScores}`;
};

export { staticRender, gamePlayRender };
