import Team from './Team.js';
import Bowman from './bowman.js';
import Swordsman from './swordsman.js';

const team = new Team({
  char1: new Bowman('Лучник'),
  char2: new Swordsman('Мечник'),
});

const iterator = team[Symbol.iterator]();
console.log(iterator.next().value[1]);
console.log(iterator.next().value[1]);
