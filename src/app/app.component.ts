import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleCalculator';

  public num1!: number;
  public num2!: number;
  public result!: number;

  add() {
    this.result=this.num1+this.num2;
  }

  subtract() {
    this.result=this.num1-this.num2;
  }

  multiply() {
    this.result=this.num1*this.num2;
  }

  divide() {
    this.result=this.num1/this.num2;
  }
}