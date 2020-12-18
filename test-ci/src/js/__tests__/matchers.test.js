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

test('sortByHealth: toEqual', () => {
  expect(sortByHealth(inputArr)).toEqual(expectedArr);
});

test('sortByHealth: toBe', () => {
  expect(sortByHealth(inputArr)).toBe(expectedArr);
});

test('sortByHealth: toBe + JSON.stringify', () => {
  expect(JSON.stringify(sortByHealth(inputArr))).toBe(JSON.stringify(expectedArr));
});
