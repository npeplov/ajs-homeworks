export default class Team {
  constructor(...chars) {
    this.chars = {...chars};
  }
  *[Symbol.iterator]() {
    let i = 0;
      while (this.chars[i])
        yield this.chars[i++];
  }
}
