import getLevel from '../mocking.js';
import fetchData from '../http.js';

jest.mock('../http.js');

test('getLevel of elf80 returns ok', () => {
  const response = {
    status: 'ok',
    level: 80,
  };
  fetchData.mockReturnValue(response);

  expect(getLevel('elf80')).toBe('Ваш текущий уровень: 80');
  expect(fetchData).toBeCalledWith('https://server/user/elf80');
});

test('getLevel returns Service Unavailable', () => {
  fetchData.mockReturnValue({});

  expect(getLevel('elf90')).toBe('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/elf90');
});
