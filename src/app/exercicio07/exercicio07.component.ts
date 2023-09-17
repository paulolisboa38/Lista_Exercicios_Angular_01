import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.css']
})

export class Exercicio07Component {
  // Inicialize com o painel que você deseja mostrar primeiro
  painelAtual: string = 'painel1';
  
  mostrarPainel(painel: string): void {
    this.painelAtual = painel;
  }
}
