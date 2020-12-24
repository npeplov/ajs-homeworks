import Validator from '../nicks.js';

test('All rules are matched', () => {
  expect(Validator.validateUsername('aaa11_-31Zaaaa')).toBe(
    true,
  );
});

test('3 numbers or more', () => {
  expect(Validator.validateUsername('aaa1131Zaaa')).toBe(
    false,
  );
});

test('Starts from a number', () => {
  expect(Validator.validateUsername('1aaa1131aaaa')).toBe(
    false,
  );
});

test('Ends with a _', () => {
  expect(Validator.validateUsername('aaa1131aaaa_')).toBe(
    false,
  );
});
