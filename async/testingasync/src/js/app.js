import GameSavingLoader from './gamesavingloader.js';

(async () => {
  const data = await GameSavingLoader.load();
  // eslint-disable-next-line no-console
  console.log(data);
})();
