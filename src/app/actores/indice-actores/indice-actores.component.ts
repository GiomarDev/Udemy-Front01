import { Component, OnInit } from '@angular/core';
import { ActoresService } from '../actores.service';
import { actorDTO } from '../actor';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit{

  constructor(private actoresService: ActoresService) {}

  actores: actorDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.actoresService.obtenerTodos(pagina, cantidadElementosAMostrar).subscribe((response: HttpResponse<actorDTO[]>) => {
      this.actores = response.body;
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
    this.actoresService.borrar(id).subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }
}
