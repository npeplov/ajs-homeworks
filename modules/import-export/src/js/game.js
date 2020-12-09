/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
import Character from './domain.js';

export default class Game {
  static start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}
console.log(Character);
