import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lista Exercícios Angular 01';
  mostrarTexto: boolean = false;
  texto: string = "Mostrando texto que estava oculto.";

  alternarTexto() {
    this.mostrarTexto = !this.mostrarTexto;
  }
}
