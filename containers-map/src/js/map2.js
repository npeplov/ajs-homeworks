export default class Settings {
  constructor() {
    this.def = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.users = new Map([
      ['theme', 'light'],
      ['difficulty', 'hard'],
    ]);
  }

  get() {
    return new Map([...this.def, ...this.users]);
  }
}
