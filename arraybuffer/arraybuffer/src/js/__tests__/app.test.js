/* eslint-disable no-new */
import ArrayBufferConverter from '../app.js';

test('Строка', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load('Строка текста');
  expect(buffer.toString()).toBe('Строка текста');
});

test('Объект в строке', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
