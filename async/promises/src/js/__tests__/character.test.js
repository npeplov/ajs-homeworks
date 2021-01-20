/* eslint-disable no-new */
import Character from '../character.js';

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
