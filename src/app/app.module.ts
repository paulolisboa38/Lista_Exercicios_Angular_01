import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { Exercicio03Component } from './exercicio03/exercicio03.component';
import { Exercicio04Component } from './exercicio04/exercicio04.component';
import { Exercicio05Component } from './exercicio05/exercicio05.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    Exercicio03Component,
    Exercicio04Component,
    Exercicio05Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
