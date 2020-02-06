import { Component, OnInit } from '@angular/core';
import { RatesService } from 'src/app/services/rates.service';
import { interval, Observable, BehaviorSubject, timer } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';


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
  items: any;
  item: number;
  convertedValues: any;
  values: any;

  constructor(private ratesService: RatesService) { }
  int: Observable<number> = timer(0, 2000)

  ngOnInit() {

    this.data = this.int
      .pipe(switchMap(this.ratesService.getRates))
      .subscribe((res: any) => {
        this.items = res.response
        console.log(this.items
          [0].price);
      })

  }
  
  convert(value) {
    if (value != "") {
      this.data.unsubscribe()
      this.convertedValues = this.items.map((item) => item.price * value);
    }

  }
  

  trackByFn(index) {
    return index;
  }
}
