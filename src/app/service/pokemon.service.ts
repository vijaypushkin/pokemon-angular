import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'http://pokeapi.salestock.net/api/v2';
  private pokemonListUrl = `${this.url}/pokemon`;

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.pokemonListUrl);
  }
}
