import { Component, Input } from '@angular/core';
import { MultipleSelectorModel } from './MultipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent {

  @Input()
  Selecionados: MultipleSelectorModel[] = [];

  @Input()
  NoSelecionados: MultipleSelectorModel[] = [];

  seleccionarTodo(){
    this.Selecionados.push(...this.NoSelecionados);
    this.NoSelecionados = [];
  }

  desSeleccionarTodo(){
    this.NoSelecionados.push(...this.Selecionados);
    this.Selecionados = [];
  }

  seleccionar(item: MultipleSelectorModel, index: number){
    this.Selecionados.push(item);
    this.NoSelecionados.splice(index, 1);
  }

  desSeleccionar(item: MultipleSelectorModel, index: number){
    this.NoSelecionados.push(item);
    this.Selecionados.splice(index, 1);
  }
  
}