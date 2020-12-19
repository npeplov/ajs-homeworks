import Character from './character.js';

export default class Magician extends Character {
  constructor(...args) {
    super(...args, 'Magician');
    this.attack = 10;
    this.defense = 40;
  }
}
