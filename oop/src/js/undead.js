import Character from './character.js';

export default class Undead extends Character {
  constructor(...args) {
    super(...args, 'Undead');
    this.attack = 25;
    this.defense = 25;
  }
}
