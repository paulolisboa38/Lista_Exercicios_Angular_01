import { Component } from '@angular/core';
import { TarefaModel } from 'src/shared/models/tarefaModel';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})

export class ListaTarefasComponent {

  addBotao: string = "Adicionar Tarefa";
  novaTarefaNome: string = "";
  novaTarefaDescricao: string = "";

  tarefas: TarefaModel[] = [
    new TarefaModel("Varrer", "Varrer o chão"),
    new TarefaModel("Lavar louça", "Lavar toda a louça suja"),
    new TarefaModel("Estudar", "Participar das aulas e fazer as atividades")
  ]

  adicionarTarefa() {
    console.log('Método adicionarTarefa chamado');
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
