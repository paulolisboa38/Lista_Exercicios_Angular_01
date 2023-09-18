import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercicio12',
  templateUrl: './exercicio12.component.html',
  styleUrls: ['./exercicio12.component.css']
})

export class Exercicio12Component {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulário válido', this.user);
      // Implemente a lógica de registro aqui
    } else {
      console.log('Formulário inválido');
    }
  }
}
