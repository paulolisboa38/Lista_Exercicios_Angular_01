import { Component } from '@angular/core';
import { TarefaModel } from 'src/shared/models/tarefaModel';

@Component({
  selector: 'app-exercicio09',
  templateUrl: './exercicio09.component.html',
  styleUrls: ['./exercicio09.component.css']
})

export class Exercicio09Component {
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

  excluirTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
