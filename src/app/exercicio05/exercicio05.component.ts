import { Component } from '@angular/core';
import { ProdutoModel } from 'src/shared/models/produtoModel';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css']
})

export class Exercicio05Component {
  produtos: ProdutoModel [] = [
    new ProdutoModel(1,"Teclado",100,"Teclado sem fio."),
    new ProdutoModel(2,"Mouse",30,"Mouse sem fio."),
    new ProdutoModel(3,"Monitor",1000,"Monitor de led."),
  ]

  classificarProdutoPorNome(){
    this.produtos.sort((a,b) => a.nome.localeCompare(b.nome));
  }

  classificarProdutoPorPreco(){
    this.produtos.sort((a,b) => a.preco -b.preco);
  }
}
