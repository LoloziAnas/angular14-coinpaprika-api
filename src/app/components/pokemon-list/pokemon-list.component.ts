import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.pokemonService.getPokemones().subscribe((res: any)=>{console.log(res)})

    }, 5000);
  }


}
