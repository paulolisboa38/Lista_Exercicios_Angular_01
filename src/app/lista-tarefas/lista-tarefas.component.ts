import { Component } from '@angular/core';
import { TarefaModel } from 'src/shared/models/tarefaModel';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})

export class ListaTarefasComponent {
  tarefas: TarefaModel[] = [
    new TarefaModel("Varrer", "Varrer o chão"),
    new TarefaModel("Lavar louça", "Lavar toda a louça suja"),
    new TarefaModel("Estudar", "Participar das aulas e fazer as atividades")
  ]
  
  addBotao: string = "Adicionar Tarefa";
  novaTarefaNome: string = "";
  novaTarefaDescricao: string = "";

  adicionarTarefa() {
    

    const novaTarefa = new TarefaModel(`Tarefa ${this.tarefas.length + 1}`, `Esta é a tarefa ${this.tarefas.length + 1}`);
    this.tarefas.push(novaTarefa);
  }


}
