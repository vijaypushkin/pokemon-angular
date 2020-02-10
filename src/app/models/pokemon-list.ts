export class PokemonList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  }[];
}
