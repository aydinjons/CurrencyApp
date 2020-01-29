import { Component, OnInit } from '@angular/core';
import { RatesService } from 'src/app/services/rates.service';
import { interval, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [RatesService]
})
export class MainComponent implements OnInit {
  usd: any;
  try: any;
  eur: any;
  data: any;

  constructor(private ratesService: RatesService) { }
  int: Observable<number> = interval(6000)
  ngOnInit() {

     this.data = this.int
      .pipe(
        switchMap(() => {
         return this.ratesService.getRates()
        }))
        .subscribe(res => {
        this.eur =  res.response[1].price
        this.usd =  res.response[0].price
       // this.usd = (1 / res.rates.USD).toFixed(3)
        console.log(this.eur);
      })

  }

convert(value){
console.log( typeof value);
if(value != ""){
this.usd = this.usd*value
this.eur = this.eur*value
this.data.unsubscribe()
}




}


}
