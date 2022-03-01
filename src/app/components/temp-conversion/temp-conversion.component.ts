import { Component, OnInit } from '@angular/core';
import { ConversionsService } from 'src/app/conversions.service';

@Component({
  selector: 'app-temp-conversion',
  templateUrl: './temp-conversion.component.html',
  styleUrls: ['./temp-conversion.component.css']
})
export class TempConversionComponent implements OnInit {

  private _celsius: string = '0';
  private _fahrenheit: string = '32';

  constructor(private conversionService: ConversionsService) { }




  get celsius(): string {
    return this._celsius;
  }
  set celsius(val: string) {
    this._celsius = val;

  }


  get fahrenheit(): string {
    return this._fahrenheit;
  }
  set fahrenheit(val: string) {
    this._fahrenheit = val;
  }

  celF(){
    this.fahrenheit = '';
    const far = this.conversionService.celF(Number(this._celsius));
    const conver = far.toString();
    this._fahrenheit = conver;
  }

  farC(){
    this._celsius = '';
    const far = this.conversionService.farC(Number(this.fahrenheit));
    const conver = far.toString();
    this._celsius = conver;  }


  ngOnInit(): void {
  }

}
