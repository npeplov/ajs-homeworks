import Team from '../set.js';
import Bowman from '../bowman.js';
import Daemon from '../daemon.js';
import Swordsman from '../swordsman.js';

test('Add char Bowman 1 time', () => {
  const team = new Team();
  const char = new Bowman('Лучник', 'Bowman');
  team.add(char);
  expect(team.toArray()).toEqual(
    [{
      attack: 25, defense: 25, health: 100, level: 1, name: 'Лучник', type: 'Bowman',
    }],
  );
});

test('Add char 2 times (Bowman)', () => {
  const team = new Team();
  const char = new Bowman('Лучник', 'Bowman');
  expect(() => {
    team.add(char);
    team.add(char);
  })
    .toThrowError(new Error('Char exist'));
});

test('addAll - 3 different chars', () => {
  const team = new Team();
  const bowman = new Bowman('Лучник');
  const daemon = new Daemon('Демон');
  const swordsman = new Swordsman('Мечник');

  team.addAll(bowman, daemon, swordsman);
  expect(team.toArray()).toEqual(
    [
      {
        attack: 25, defense: 25, health: 100, level: 1, name: 'Лучник', type: 'Bowman',
      },
      {
        attack: 10, defense: 40, health: 100, level: 1, name: 'Демон', type: 'Daemon',
      },
      {
        attack: 40, defense: 10, health: 100, level: 1, name: 'Мечник', type: 'Swordsman',
      },
    ],
  );
});

test('addAll - Doubled bowman throw Err', () => {
  const team = new Team();
  const bowman = new Bowman('Лучник');
  const daemon = new Daemon('Демон');
  const swordsman = new Swordsman('Мечник');

  expect(() => {
    team.addAll(bowman, daemon, swordsman, bowman);
  })
    .toThrowError(new Error('Char exist'));
});
