/* eslint-disable no-new */
import Magician from '../magician.js';

test('distance 2, attack = 9', () => {
  const mage = new Magician('Маг', null, 2);
  expect(mage.getAttack()).toBe(9);
});

test('distance 3, attack = 8', () => {
  const mage = new Magician('Маг', null, 3);
  expect(mage.getAttack()).toBe(8);
});

test('distance 4, attack = 7', () => {
  const mage = new Magician('Маг', null, 4);
  expect(mage.getAttack()).toBe(7);
});

test('distance 2 + stoned, attack = 8.5', () => {
  const mage = new Magician('Маг', null, 2);
  mage.setStoned();
  expect(mage.getAttack()).toBe(8.5);
});

test('.getStoned() = true', () => {
  const mage = new Magician('Маг', null, 1);
  mage.setStoned();
  expect(mage.getStoned()).toBe(true);
});

test('.setAttack() ,getAttack = 10', () => {
  const mage = new Magician('Маг', null, 1);
  mage.setAttack();
  expect(mage.getAttack()).toBe(10);
});

test('.type = Magician', () => {
  const mage = new Magician('Маг', null, 1);
  mage.setAttack();
  expect(mage.type).toBe('Magician');
});
