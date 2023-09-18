import { Component } from '@angular/core';
import { TarefaModel } from 'src/shared/models/tarefaModel';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})

export class Exercicio02Component {
  addBotao: string = "Adicionar Tarefa";
  novaTarefaNome: string = "";
  novaTarefaDescricao: string = "";

  tarefas: TarefaModel[] = [
    new TarefaModel("Varrer", "Varrer o chão"),
    new TarefaModel("Lavar louça", "Lavar toda a louça suja"),
    new TarefaModel("Estudar", "Participar das aulas e fazer as atividades")
  ]

  adicionarTarefa() {
    if (this.novaTarefaNome && this.novaTarefaDescricao) {
      const novaTarefa = new TarefaModel(
        this.novaTarefaNome,
        this.novaTarefaDescricao
      )
      this.tarefas.push(novaTarefa);
      this.novaTarefaNome = '';
      this.novaTarefaDescricao = '';
    }
    else {
      console.log("Inserir nome e descrição das tarefas.");
    }
  }
}
