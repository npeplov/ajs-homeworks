import Movie from './domain/movie';
import Cart from './service/cart';

const film1 = new Movie(111, 'Avengers', 150, 2012, 'USA', 'Hello world',
 ['scifi', 'fantasy'], 137, '001.png');
 const film2 = new Movie(222, 'Avengers', 150, 2012, 'USA', 'Hello world',
 ['scifi', 'fantasy'], 137, '001.png');

const cart = new Cart();
cart.add(film1);
cart.add(film2);

cart.del(111);
console.log(cart.getAll());

// const c = cart.getAll();
// console.log(c.findIndex((item) => {
//   return item.id === 0;
// }));


// c.forEach((item) => {
//   if (item.id === 222)
//     console.log(c.indexOf(item));
// });
