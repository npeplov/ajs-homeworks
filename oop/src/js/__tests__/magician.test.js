/* eslint-disable no-new */
import Magician from '../magician.js';

test('Magician', () => {
  const char = new Magician('Indrgyh');
  expect([
    char.health, char.attack, char.defense, char.type,
  ]).toEqual([
    100, 10, 40, 'Magician',
  ]);
});
