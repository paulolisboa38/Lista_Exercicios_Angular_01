import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.css']
})

export class Exercicio10Component {
  mostrarDetalhes = false;
  usuario = {
    nome: 'Paulo Lisboa',
    email: 'paulolisboa38@gmail.com',
    idade: 44,
    detalhesAdicionais: 'Aluno +Devs2Blu - Turma C#.'
  };

  alternarDetalhesAdicionais() {
    this.mostrarDetalhes = !this.mostrarDetalhes;
  }
}