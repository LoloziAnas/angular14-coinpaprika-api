import { Component, OnInit } from '@angular/core';
import {CoinResponse, CoinService} from "../../services/coin.service";

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent implements OnInit {

  constructor(private coinService:CoinService) { }

  ngOnInit(): void {
    this.coinService.getCoinByName("").subscribe((response: any) => {console.log(response)})
    setTimeout(() => {
      this.coinService.getCoins().subscribe((response: CoinResponse) =>
      {
        console.log(response.coins)
      });
    }, 5000);

  }

}
