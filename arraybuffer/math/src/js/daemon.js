import Nerf from './nerfchars.js';

export default class Daemon extends Nerf {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defense = 40;
  }
}
