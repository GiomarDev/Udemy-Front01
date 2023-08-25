import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute){}
  form: FormGroup

  generos = [
    {id: 1, nombre: 'Drama'}, 
    {id: 2, nombre: 'Acción'}, 
    {id: 3, nombre: 'Comedia'}
  ]

  peliculas = [
    {titulo: 'Spider-Man 1', enCines: true, proximosEstrenos: false, generos:[1,3], poster: 'https://hdqwalls.com/wallpapers/spider-man-far-from-home-5k-2019-8t.jpg'},
    {titulo: 'Spider-Man 2', enCines: true, proximosEstrenos: true, generos:[1,2], poster: 'https://th.bing.com/th/id/R.63620644b073cda4098859486d902a47?rik=QKCrYP4N60EUDw&riu=http%3a%2f%2fandroidfunz.com%2fwp-content%2fuploads%2f2016%2f07%2fspider_man_2_poster__2004__by_predatorx20-d80mer7.jpg&ehk=x3okltw4Oc1b0zpodMDJ45EfY8oDfVzEScLqOTu5y%2fk%3d&risl=&pid=ImgRaw&r=0'},
    {titulo: 'Spider-Man 3', enCines: false, proximosEstrenos: true, generos:[3,1], poster: 'https://th.bing.com/th/id/OIP.DMSsPV3YGJAqPU8fPHwtwAHaE6?pid=ImgDet&rs=1'},
  ]

  peliculasOriginal = this.peliculas;
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe(valor => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valor);
      this.escribirParametrosBusquedaEnUrl();
    })
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }

      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);
    })
  }

  private escribirParametrosBusquedaEnUrl(){
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if(valoresFormulario.generoId){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }

    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  buscarPeliculas(valor: any){
    if(valor.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valor.titulo) !== -1);
    }
    if(valor.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valor.generoId) !== -1);
    }
    if(valor.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valor.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}