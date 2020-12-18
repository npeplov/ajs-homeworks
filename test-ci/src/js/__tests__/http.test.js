import fetchData from '../http.js';

test('http.js throws Mock this!', () => {
  expect(() => {
    fetchData('https://server/user/');
  }).toThrow();
});
