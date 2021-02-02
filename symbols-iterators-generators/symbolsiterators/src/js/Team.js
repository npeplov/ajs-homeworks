export default class Team extends Object {
  constructor(object) {
    super();
    Object.assign(this, object);
  }

  [Symbol.iterator]() {
    const entires = Object.entries(this);
    let ind = 0;

    return {
      next() {
        const result = {
          value: entires[ind],
          done: ind >= entires.length,
        };
        ind += 1;
        return result;
      },
    };
  }
}
