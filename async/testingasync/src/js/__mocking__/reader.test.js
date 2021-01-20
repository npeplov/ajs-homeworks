import GameSavingLoader from '../gamesavingloader.js';
import read from '../reader.js';

jest.mock('../reader.js');

it('Throw err in Read.js -> Catch in Gamesaving.js', async () => {
  read.mockRejectedValue(new Error('Async error'));
  expect(await GameSavingLoader.load()).toBe('gamesavingloader.js Error!');
});
