import Team from './Team.js';
import Bowman from './bowman.js';
import Swordsman from './swordsman.js';

const char1 = new Bowman('Лучник');
const char2 = new Swordsman('Мечник');
const team = new Team(char1, char2);

console.log( ...team );
