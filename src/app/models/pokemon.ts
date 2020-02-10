export class Pokemon {
  id: number;
  name: string;
  'is_main_series': boolean;
  generation: {
    name: string;
    url: string;
  };
}
