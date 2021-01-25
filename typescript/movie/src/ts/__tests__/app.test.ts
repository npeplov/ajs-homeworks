import Movie from '../domain/movie';
import Cart from '../service/cart';

test('Adding movie to Cart & getAll items from Cart', () => {
  const film = new Movie(1, 'Avengers', 150, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const cart = new Cart();
  cart.add(film);
  expect(cart.getAll()).toEqual([film]);
});
