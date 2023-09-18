import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio13',
  templateUrl: './exercicio13.component.html',
  styleUrls: ['./exercicio13.component.css']
})

export class Exercicio13Component {
  lampOn = false;

  toggleLamp() {
    this.lampOn = !this.lampOn;
  }
}
