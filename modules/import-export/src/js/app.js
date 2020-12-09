/* eslint-disable no-console */
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

// const game = new Game();
Game.start();

console.log(
  'Game:', Game,
  '\nGameSavingData:', GameSavingData,
  '\nloadGame:', loadGame,
  '\nsaveGame:', saveGame,
);
