import Character from './character.js';

export default class Bowman extends Character {
  constructor(...args) {
    super(...args, 'Bowman');
    this.attack = 25;
    this.defense = 25;
  }
}
