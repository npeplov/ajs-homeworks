import Buyable from "./buyable";

export default class Device implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly uniq: boolean;

  quant: number;

  constructor(id: number, name: string, price: number, uniq: boolean, quant: number = 1) {

    this.id = id;
    this.name = name;
    this.price = price;
    this.uniq = uniq;
    this.quant = quant;
  }
}
