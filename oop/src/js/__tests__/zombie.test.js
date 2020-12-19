/* eslint-disable no-new */
import Zombie from '../zombie.js';

test('Zombie health', () => {
  const char = new Zombie('Shon');
  expect([
    char.health, char.attack, char.defense, char.type,
  ]).toEqual([
    100, 40, 10, 'Zombie',
  ]);
});
