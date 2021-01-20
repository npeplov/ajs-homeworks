/* eslint-disable no-new */
import Magician from '../magician.js';

test('distance 2, attack = 9', () => {
  const mage = new Magician('Маг', null, 2);
  expect(mage.attack).toBe(9);
});

test('distance 3, attack = 8', () => {
  const mage = new Magician('Маг', null, 3);
  expect(mage.attack).toBe(8);
});

test('distance 4, attack = 7', () => {
  const mage = new Magician('Маг', null, 4);
  expect(mage.attack).toBe(7);
});

test('.stoned = true', () => {
  const mage = new Magician('Маг', null, 1);
  mage.stoned = true;
  expect(mage.stoned).toBe(true);
});

test('attack = 100 + stoned -> attack = 85', () => {
  const mage = new Magician('Маг', null, 2);
  mage.attack = 100;
  mage.stoned = true;
  expect(mage.attack).toBe(85);
});
