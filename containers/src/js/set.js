export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    this.members.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(char)) {
        throw new Error('Char exist');
      }
    });
    this.members.add(char);
  }

  addAll(...chars) {
    chars.forEach((item) => {
      this.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
