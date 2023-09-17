import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {
  transform(items: any[], termoDePesquisa: string): any {
    if (!items) return [];
    if (!termoDePesquisa) return items;

    termoDePesquisa = termoDePesquisa.toLowerCase();

    return items.filter(item => {
      return item.nome.toLowerCase().includes(termoDePesquisa);
    });
  }
}
