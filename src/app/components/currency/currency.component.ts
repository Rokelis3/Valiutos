import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

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


  public isLoading:boolean=true;
  public isError:boolean=false;

  constructor(private currencyService:CurrencyService) { }



  ngOnInit(): void {
    this.loadCurrency();
  }

  private loadCurrency(){
    this.currencyService.loadCurrency().subscribe({
      next:(response)=>{
        this.currency=response;
        this.isLoading=false;
      },
      error:(error)=>{
        this.isLoading=false;
        this.isError=true;
      }
    })
  }
}



