/* eslint-disable no-new */
import Character from '../character.js';
import Bowman from '../bowman.js';

test('Character name A', () => {
  expect(() => {
    new Character('A', 'Bowman');
  }).toThrowError('Неверное имя. Задайте от 2 до 10 символов');
});

test('Bowman name Aaaaaaaaaaaaa', () => {
  expect(() => {
    new Character('Aaaaaaaaaaaaa', 'Bowman');
  }).toThrowError('Неверное имя. Задайте от 2 до 10 символов');
});

test('Character with type Abracadabra', () => {
  expect(() => {
    new Character('Gorynych', 'Dragon');
  }).toThrowError('Неверный тип');
});

test('LvlUp of Dead', () => {
  const char = new Character('Archer', 'Bowman', 0);
  expect(() => {
    char.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('Bowman health, attack-defense after levelUp', () => {
  const char = new Bowman('Indrgyh');
  char.levelUp();
  expect([char.health, char.attack, char.defense]).toEqual([100, 30, 30]);
});

test('Wounded after Damage ', () => {
  const char = new Bowman('Indrgyh');
  char.damage(50);
  expect(char.health).toBe(62.5);
});

test('Dead after Damage ', () => {
  const char = new Bowman('Indrgyh', 'Bowman', 25);
  char.damage(40);
  expect(char.health).toBe(0);
});
