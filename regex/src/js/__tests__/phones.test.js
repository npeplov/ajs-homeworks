import Validator from '../phones.js';

test('8 (927) 000-00-00 -> +79270000000', () => {
  expect(Validator.validatePhone('8 (927) 000-00-00')).toEqual(
    '+79270000000',
  );
});
test('+7 960 000 00 00 -> +79600000000', () => {
  expect(Validator.validatePhone('7 960 000 00 00')).toEqual(
    '+79600000000',
  );
});

test('+86 000 000 0000 -> +860000000000', () => {
  expect(Validator.validatePhone('+86 000 000 0000')).toEqual(
    '+860000000000',
  );
});
