/* eslint-disable no-new */
import Daemon from '../daemon.js';

test('Daemon', () => {
  const char = new Daemon('Tools');
  expect([
    char.health, char.attack, char.defense, char.type,
  ]).toEqual([
    100, 10, 40, 'Daemon',
  ]);
});
