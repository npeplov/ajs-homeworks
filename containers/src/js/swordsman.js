import Character from './character.js';

export default class Swordsman extends Character {
  constructor(...args) {
    super(...args, 'Swordsman');
    this.attack = 40;
    this.defense = 10;
  }
}
