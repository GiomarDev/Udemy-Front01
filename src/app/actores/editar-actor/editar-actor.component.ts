import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute){}

  modelo: actorDTO = {nombre: "Giomar", fechaNacimiento: new Date(), foto: 'https://th.bing.com/th/id/OIP.yc-0oNEaxog7Jb3BPoNmQgHaHZ?pid=ImgDet&rs=1'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    });
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }

}