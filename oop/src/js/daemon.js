import Character from './character.js';

export default class Daemon extends Character {
  constructor(...args) {
    super(...args, 'Daemon');
    this.attack = 10;
    this.defense = 40;
  }
}
