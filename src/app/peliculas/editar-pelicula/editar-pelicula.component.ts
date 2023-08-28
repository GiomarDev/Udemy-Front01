import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {

  modelo: PeliculaDTO = {titulo: 'Spiderman', trailer: '', enCines: true, resumen: 'cosa', fechaLanzamiento: new Date(), poster: 'https://th.bing.com/th/id/R.8fa504c9b505484074a49038d06f3d00?rik=unozpyHwMlXkXA&riu=http%3a%2f%2fsilviaalonsoperez.com%2fwp-content%2fuploads%2f2017%2f06%2ffisica.jpg&ehk=ssI2FneGRTmkSx%2fxr9z4vo5OSeSD%2bzN8Z3Oa%2fnbSy%2b8%3d&risl=&pid=ImgRaw&r=0'}

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
