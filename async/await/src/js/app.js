import GameSavingLoader from './gamesavingloader.js';

(async () => {
  const saving = await GameSavingLoader.load();
  console.log('saving: ', saving);
})()
