/* eslint-disable no-new */
import Swordsman from '../swordsman.js';

test('Swordsman health', () => {
  const char = new Swordsman('Bernard');
  expect([
    char.health, char.attack, char.defense, char.type,
  ]).toEqual([
    100, 40, 10, 'Swordsman',
  ]);
});
