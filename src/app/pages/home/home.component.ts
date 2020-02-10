import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon-list';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonList;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(data => {
      console.log({ data });
      this.pokemonList = data;
    });
  }
}
