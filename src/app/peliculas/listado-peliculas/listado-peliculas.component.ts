import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit{
  @Input()
  Peliculas;

  ngOnInit(): void {
    
  }

  remover(index: number): void{
    this.Peliculas.splice(index, 1);
  }
}
