import { Component, OnInit } from '@angular/core';
import { CinesService } from '../cines.service';
import { cineDTO } from '../cine';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.css']
})
export class IndiceCinesComponent implements OnInit{

  constructor(private cineService: CinesService) {}

  cines: cineDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.cineService.obtenerTodos(pagina, cantidadElementosAMostrar).subscribe((response: HttpResponse<cineDTO[]>) => {
      this.cines = response.body;
      console.log(response.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros = response.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent){
    debugger;
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.cineService.borrar(id).subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }
}
