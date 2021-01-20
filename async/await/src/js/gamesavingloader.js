/* eslint-disable no-return-assign */
import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      return json(data);
    } catch (e) {
      return e;
    }
  }
}
