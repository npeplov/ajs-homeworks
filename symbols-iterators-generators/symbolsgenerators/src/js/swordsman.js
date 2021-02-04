import Character from './character.js';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defense = 10;
  }
}
