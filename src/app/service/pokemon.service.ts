import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2';
  private pokemonUrl = `${this.url}/pokemon`;

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.pokemonUrl);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonUrl}/${name}`);
  }
}
