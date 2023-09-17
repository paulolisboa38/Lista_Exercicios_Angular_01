import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})

export class Exercicio04Component {
  mensagem: string = "";
  usuario: string = "";
  senha: string = "";
  mostrarMensagem: boolean = true;

  verificarCredenciais() {
    if (this.usuario === "paulolisboa" && this.senha === "123@") {
      this.mensagem = "Usuário autorizado."
      this.usuario = "";
      this.senha = "";
    }
    else {
      this.mensagem = "Usuário não autorizado.";
    }
  }
}