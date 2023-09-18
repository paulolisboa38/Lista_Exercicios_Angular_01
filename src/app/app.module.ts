import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { Exercicio03Component } from './exercicio03/exercicio03.component';
import { Exercicio04Component } from './exercicio04/exercicio04.component';
import { Exercicio05Component } from './exercicio05/exercicio05.component';
import { Exercicio06Component } from './exercicio06/exercicio06.component';
import { Exercicio07Component } from './exercicio07/exercicio07.component';
import { Exercicio08Component } from './exercicio08/exercicio08.component';
import { FiltrarPipe } from './pipes/filter.pipe';
import { Exercicio09Component } from './exercicio09/exercicio09.component';
import { Exercicio10Component } from './exercicio10/exercicio10.component';
import { Exercicio11Component } from './exercicio11/exercicio11.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    Exercicio03Component,
    Exercicio04Component,
    Exercicio05Component,
    Exercicio06Component,
    Exercicio07Component,
    Exercicio08Component,
    FiltrarPipe,
    Exercicio09Component,
    Exercicio10Component,
    Exercicio11Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
