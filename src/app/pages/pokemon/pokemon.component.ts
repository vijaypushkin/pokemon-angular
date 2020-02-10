import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService } from 'src/app/service/pokemon.service';
import { Pokemon, Sprites } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemon(name).subscribe(pokemon => {
      console.log({ pokemon });
      this.pokemon = pokemon;
    });
  }

  getImages(): { name: string; url: string }[] {
    return Object.entries(this.pokemon.sprites).map(x => ({
      name: `${x[0]}`,
      url: `${x[1]}`
    }));
  }

  getMoves(): string[] {
    return this.pokemon.moves.map(({ move }) => move.name.replace('-', ' '));
  }
}
