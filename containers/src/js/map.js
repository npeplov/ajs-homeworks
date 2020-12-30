export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Length of name must to be from 2 to 10 symbols'],
      [2, 'Invalid char type'],
      [3, 'Char exist'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
