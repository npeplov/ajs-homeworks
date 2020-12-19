/* eslint-disable no-new */
import Bowman from '../bowman.js';

test('Bowman health', () => {
  const char = new Bowman('Indrgyh');
  expect([
    char.health, char.attack, char.defense, char.type,
  ]).toEqual([
    100, 25, 25, 'Bowman',
  ]);
});
