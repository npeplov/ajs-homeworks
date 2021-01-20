import Character from './character.js';

export default class Nerf extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
    this.attack = 10;
    this.stoned = false;
  }

  get stoned() {
    return this.xstoned;
  }

  set stoned(value) {
    this.xstoned = value;
  }

  set attack(value) {
    this.xattack = value;
  }

  get attack() {
    let attack = this.xattack * ((11 - this.distance) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }
}
