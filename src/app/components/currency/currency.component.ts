import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public currency:Currency={
    amount:0,
    base:"",
    date:"",
    rates:{
      USD:0
    }
  }

  constructor(private http:HttpClient) { }



  ngOnInit(): void {
    this.loadCurrency();
  }

  private loadCurrency(){
    this.http.get<Currency>("https://api.frankfurter.app/latest?from=EUR&to=USD").subscribe(
      (response) =>{
        this.currency=response;
      }
    )
  }


}



