/* eslint-disable no-new */
import Undead from '../undead.js';

test('Undead health', () => {
  const char = new Undead('Undeleted');
  expect([
    char.health, char.attack, char.defense, char.type,
  ]).toEqual([
    100, 25, 25, 'Undead',
  ]);
});
