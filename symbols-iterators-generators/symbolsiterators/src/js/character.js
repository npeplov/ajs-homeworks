export default class Character {
  constructor(name, type, health = 100) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = 1;
    this.attack = null;
    this.defense = null;
    const typesArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!(typesArr.includes(this.type))) {
      throw new Error('Неверный тип');
    }
  }
}
