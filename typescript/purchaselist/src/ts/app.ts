import Device from './domain/device';
import Cart from './service/cart';
import Movie from './domain/movie';

const film = new Movie(1111, 'Avengers', 150, true, 1, 2012, 'USA', 'Hello world',
['scifi', 'fantasy'], 137, '001.png');
const device = new Device(101, '386SX', 1000, false);
const cart = new Cart();
cart.add(film);
cart.add(device);
cart.add(device);
cart.add(film);

console.log(cart.getAll());


