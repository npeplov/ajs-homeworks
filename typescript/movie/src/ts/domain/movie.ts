import Buyable from "./buyable";

export default class Movie implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly price: number;

  readonly year: number;
  readonly country: string;
  readonly tagline: string;
  readonly genre: Array<string>;
  readonly runtime: number;
  readonly poster: string;

  constructor(id: number, name: string, price: number, year: number, country: string, 
    tagline: string, genre: Array<string>, runtime: number, poster: string) {

    this.id = id;
    this.name = name;
    this.price = price;

    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.runtime = runtime;
    this.poster = poster;
  }
}
