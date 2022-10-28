import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const ROOT_API = "https://pokeapi.co/api/v2/";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }
  getPokemones():Observable<any>{
    return this.http.get<any>(ROOT_API+"pokemon?limit=10");
  }
}
