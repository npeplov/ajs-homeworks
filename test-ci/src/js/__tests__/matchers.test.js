import sortByHealth from '../matchers.js';

const inputArr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const expectedArr = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sortByHealth 10 100 80', () => {
  expect(sortByHealth(inputArr)).toEqual(expectedArr);
});

test('sortByHealth: toBe - 10 100 80', () => {
  const buff1 = Buffer.from(sortByHealth(inputArr));
  const buff2 = Buffer.from(expectedArr);

  expect(buff1.equals(buff2)).toBe(true);
});
