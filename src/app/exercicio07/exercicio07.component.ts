import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.css']
})

export class Exercicio07Component {
  painelAtual: string = 'painel1';

  mostrarPainel(painel: string): void {
    this.painelAtual = painel;
  }
}
