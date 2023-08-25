import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
      this.PeliculasEnCines = [
        {
        titulo: "Spiderman",
        fechaLanzamiento: new Date(),
        precio: 2300.99,
        poster: 'https://vignette.wikia.nocookie.net/lemondededisney/images/8/80/Spiderman.jpg/revision/latest?cb=20151221085729&path-prefix=fr'
        },
        {
          titulo: "Mohana",
          fechaLanzamiento: new Date(),
          precio: 300.99,
          poster: 'https://vignette.wikia.nocookie.net/lemondededisney/images/8/80/Spiderman.jpg/revision/latest?cb=20151221085729&path-prefix=fr'
        }
      ]

      this.PeliculasFuturosEstrenos = [
      ]
  }

  Title = 'front-end';
  Ocultar = false;
  PeliculasEnCines;
  PeliculasFuturosEstrenos;
}
