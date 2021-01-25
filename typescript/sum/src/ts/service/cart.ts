import Buyable from '../domain/buyable';

export default class Cart {
  private items: Buyable[] = [];

  add (item: Buyable): void {
    this.items.push(item);
  }
  getAll(): Buyable[] {
    return [...this.items]
  }
  sum(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
  discount(percent: number): number {
    return this.sum() * (100 - percent) / 100;
  }
  del(targetid: number): void {
    const ind: number = this.items.findIndex((item) => {
      return item.id === targetid;
    });
    if (ind !== -1)
      this.items.splice(ind, 1);
  }
}
