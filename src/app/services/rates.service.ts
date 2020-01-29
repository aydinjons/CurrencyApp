import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private httpClient: HttpClient) { }

  getRates() {
    const rates = this.httpClient.get("https://fcsapi.com/api/forex/latest?symbol=USD/TRY,EUR/TRY&access_key=mey0staxsiNZaNub0GFG0OwCuxUywDrjsRJBpNtkM08uul");
    
  return rates
  }
}
// https://api.ratesapi.io/api/latest?base=TRY