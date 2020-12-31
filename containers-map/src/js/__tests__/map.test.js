import ErrorRepository from '../map.js';

test('translate error code #1', () => {
  const err = new ErrorRepository();
  expect(err.translate(1))
    .toBe('Length of name must to be from 2 to 10 symbols');
});

test('Unknown error code #4', () => {
  const err = new ErrorRepository();
  expect(err.translate(4))
    .toBe('Unknown error');
});
