import Movie from '../domain/movie';
import Cart from '../service/cart';
import Device from '../domain/device';

test('Sum', () => {
  const film = new Movie(1111, 'Avengers', 150, true, 1, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const cart = new Cart();
  cart.add(film);
  expect(cart.sum()).toBe(150);
});

test('Add 2 devices', () => {
  const device = new Device(101, '386SX', 1000, false);
  const cart = new Cart();
  cart.add(device);
  cart.add(device);
  expect(cart.getAll()[0].quant).toBe(2);
});

test('Sum of 2 devices and 1 movie', () => {
  const film = new Movie(1111, 'Avengers', 150, true, 1, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const device = new Device(101, '386SX', 1000, false);
  const cart = new Cart();
  cart.add(film);
  cart.add(device);
  cart.add(device);
  expect(cart.sum()).toBe(2150);
});

test('Discount', () => {
  const film = new Movie(1111, 'Avengers', 150, true, 1, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const cart = new Cart();
  cart.add(film);
  expect(cart.discount(10)).toBe(135);
});

test('Del successeful - item id 101', () => {
  const film1 = new Movie(1111, 'Avengers', 150, true, 1, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
    const device = new Device(101, '386SX', 1000, false);
  
  const cart = new Cart();
  cart.add(film1);
  cart.add(device);

  cart.del(101);
  expect(cart.getAll().length).toBe(1);
});

test('Del not existing id - 555', () => {
  const film2 = new Movie(1111, 'Avengers', 150, true, 1, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
    const device = new Device(101, '386SX', 1000, false);
  
  const cart = new Cart();
  cart.add(film2);

  cart.del(555);
  expect(cart.getAll().length).toBe(1);
});

test('Add the same movie twice', () => {
  const film2 = new Movie(1111, 'Avengers', 150, true, 1, 2012, 'USA', 'Hello world',
    ['scifi', 'fantasy'], 137, '001.png');
  const cart = new Cart();
  cart.add(film2);
  cart.add(film2);
  expect(cart.getAll()[0].quant).toBe(1);
});