import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  contenidoMarkDown = '';
  
  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  inputTextArea(texto: string){
    this.contenidoMarkDown = texto;
    this.changeMarkdown.emit(texto);
  }
}
