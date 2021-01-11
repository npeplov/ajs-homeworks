import Character from './character.js';

export default class Nerf extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
    this.attack = 10;
    this.stoned = false;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned() {
    this.stoned = !this.stoned;
  }

  setAttack() {
    // базовое значение атаки
    // зачем сеттер? возврат к дефолту на 10?
    this.attack = 10;
    // почему просто не написать this.attack = 10?
    // откуда брать дефолтные 10. где они должны храниться?
  }

  getAttack() {
    this.setAttack();
    // вся логика задания здесь
    if (this.distance === 2) {
      this.attack *= 0.9;
    }
    if (this.distance === 3) {
      this.attack *= 0.8;
    }
    if (this.distance === 4) {
      this.attack *= 0.7;
    }
    if (this.stoned) {
      this.attack -= Math.log2(this.distance) * 0.5;
    }
    return this.attack;
  }
}
