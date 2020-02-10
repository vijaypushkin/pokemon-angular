import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) {}

  ngOnInit(): void {}
}
