import getLevel from '../mocking.js';
import fetchData from '../http.js';

jest.mock('../http.js');

test('getLevel() of elf80 if Server Returns Ok', () => {
  fetchData.mockReturnValueOnce({
    status: 'ok',
    level: 80,
  });
  expect(getLevel('elf80')).toBe('Ваш текущий уровень: 80');
});

test('getLevel() if Server Unavailable', () => {
  fetchData.mockReturnValue('{}');
  expect(getLevel('elf90')).toBe('Информация об уровне временно недоступна');
});

test('getlevel() of elf80 Called With https://server/user/elf80', () => {
  getLevel('elf80');
  expect(fetchData).toHaveBeenLastCalledWith('https://server/user/elf80');
});

test('getlevel() of elf91 Not Called With https://server/user/elf90', () => {
  getLevel('elf91');
  expect(fetchData).not.toHaveBeenLastCalledWith('https://server/user/elf90');
});
