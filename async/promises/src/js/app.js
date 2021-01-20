import GameSavingLoader from './gamesavingloader.js';

// let GameSaving = {};
GameSavingLoader.load().then((saving) => {
  // GameSaving = saving;
  console.log(saving);
});
