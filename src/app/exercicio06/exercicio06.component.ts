import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  templateUrl: './exercicio06.component.html',
  styleUrls: ['./exercicio06.component.css']
})

export class Exercicio06Component implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  resultado!: number;
  operacao: string = '+';

  constructor() { }

  ngOnInit(): void { }

  calcular() {
    switch (this.operacao) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        if (this.numero2 !== 0) {
          this.resultado = this.numero1 / this.numero2;
        } else {
          this.resultado = null;
        }
        break;
      default:
        this.resultado = null;
    }
  }
}

