import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }


  public loadCurrency(){
    return this.http.get<Currency>("https://api.frankfurter.app/latest?from=EUR&to=USD");
  }
}
