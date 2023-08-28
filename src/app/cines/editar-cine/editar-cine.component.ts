import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modelo: cineDTO = {nombre: "Giomar", latitud: -10.055402736564236, longitud: -76.94824218750001};
  
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }

}
