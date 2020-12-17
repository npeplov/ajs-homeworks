import cleanFunction from '../cleanfunction.js';

test('cleanFunction: 14 (<15)', () => {
  expect(cleanFunction(
    { name: 'мечник', health: 14 },
  )).toBe('critical');
});

test('cleanFunction: 15 (from 50 to 15)', () => {
  expect(cleanFunction(
    { name: 'маг', health: 15 },
  )).toBe('wounded');
});

test('cleanFunction: 50 (from 50 to 15)', () => {
  expect(cleanFunction(
    { name: 'маг', health: 50 },
  )).toBe('wounded');
});

test('cleanFunction: 51 (> 50)', () => {
  expect(cleanFunction(
    { name: 'лучник', health: 51 },
  )).toBe('healthy');
});
