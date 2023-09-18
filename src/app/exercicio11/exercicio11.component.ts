import { Component } from '@angular/core';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exercicio11',
  templateUrl: './exercicio11.component.html',
  styleUrls: ['./exercicio11.component.css']
})

export class Exercicio11Component {
  imagens = [
    { url: 'assets/img/bandeiraBrazil.jpeg' },
    { url: 'assets/img/bandeiraEua.jpeg' },
    { url: 'assets/img/bandeiraJapao.jpeg' },
    { url: 'assets/img/bandeiraChina.jpeg' },
    { url: 'assets/img/bandeiraCuba.jpeg' }
  ];

  imagemModal: any = null;

  // constructor(private activeModal: NgbActiveModal) { }

  abrirModal(index: number) {
    this.imagemModal = this.imagens[index];
  }

  fecharModal() {
    this.imagemModal = null;
    // this.imagemModal.close();
  }
}