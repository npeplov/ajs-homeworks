export default class Character {
  constructor(name, type, health = 100) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = 1;
    this.attack = null;
    this.defense = null;
    if (this.name.length > 10 || this.name.length < 2) {
      throw new Error('Неверное имя. Задайте от 2 до 10 символов');
    }
    const typesArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!(typesArr.includes(this.type))) {
      throw new Error('Неверный тип');
    }
  }

  levelUp() {
    if (this.health === 0) throw new Error('нельзя повысить левел умершего');
    this.attack *= 1.2;
    this.defense *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defense / 100);
    if (this.health < 0) this.health = 0;
  }
}
