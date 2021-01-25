import Movie from '../domain/movie';
import Cart from '../service/cart';

test('Sum', () => {
  const film = new Movie(1111, 'Avengers', 150, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const cart = new Cart();
  cart.add(film);
  expect(cart.sum()).toBe(150);
});

test('Discount', () => {
  const film = new Movie(1111, 'Avengers', 150, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const cart = new Cart();
  cart.add(film);
  expect(cart.discount(10)).toBe(135);
});

test('Del successeful - item id 222', () => {
  const film1 = new Movie(111, 'Avengers', 150, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const film2 = new Movie(222, 'Avengers', 150, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  
  const cart = new Cart();
  cart.add(film1);
  cart.add(film2);

  cart.del(222);
  expect(cart.getAll().length).toBe(1);
});

test('Del not existing id - 555', () => {
  const film2 = new Movie(222, 'Avengers', 150, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  
  const cart = new Cart();
  cart.add(film2);

  cart.del(555);
  expect(cart.getAll().length).toBe(1);
});
