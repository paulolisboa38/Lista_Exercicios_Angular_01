import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista Exercícios Angular 01';

  mostrarOcultar: string = "Mostrar/Ocultar Texto";
  mostrarTexto: boolean = false;
  texto: string = "Este é o texto que será mostrado ou ocultado.";

  alternarTexto() {
    this.mostrarTexto = !this.mostrarTexto;
    this.mostrarOcultar = this.mostrarTexto ? "Ocultar Texto" : "Mostrar Texto";
  }
}
