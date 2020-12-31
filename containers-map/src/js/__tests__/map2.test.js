import Settings from '../map2.js';

test('get default+user Settings', () => {
  const sett = new Settings();
  expect(sett.get())
    .toEqual(
      new Map([
        ['theme', 'light'],
        ['music', 'trance'],
        ['difficulty', 'hard'],
      ]),
    );
});

test('Set user Settings + getter', () => {
  const sett = new Settings();
  sett.users.set('music', 'rock');
  expect(sett.get())
    .toEqual(
      new Map([
        ['theme', 'light'],
        ['music', 'rock'],
        ['difficulty', 'hard'],
      ]),
    );
});

test('Set setts + show properties', () => {
  const sett = new Settings();
  sett.users.set('theme', 'gray');
  expect(sett.users)
    .toEqual(
      new Map([
        ['theme', 'gray'],
        ['difficulty', 'hard'],
      ]),
    );
});
