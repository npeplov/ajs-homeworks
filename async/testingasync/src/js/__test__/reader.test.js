/* eslint-disable max-len */
import GameSavingLoader from '../gamesavingloader.js';

it('Resolve char {id..}', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});

// it('Error in char #9..', async () => {
//   const data = await read('char#:9,');
//   expect(data).toEqual('Err');
// });
