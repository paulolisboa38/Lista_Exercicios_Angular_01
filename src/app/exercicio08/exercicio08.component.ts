import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio08',
  templateUrl: './exercicio08.component.html',
  styleUrls: ['./exercicio08.component.css']
})

export class Exercicio08Component {
  termoDePesquisa: string = '';

  paises: any[] = [
    { nome: 'Brasil', bandeira: 'assets/img/bandeiraBrazil.jpeg' },
    { nome: 'EUA', bandeira: 'assets/img/bandeiraEua.jpeg' },
    { nome: 'Japão', bandeira: 'assets/img/bandeiraJapao.jpeg' },
    { nome: 'China', bandeira: 'assets/img/bandeiraChina.jpeg' },
    { nome: 'Cuba', bandeira: 'assets/img/bandeiraCuba.jpeg' },
  ];
}
