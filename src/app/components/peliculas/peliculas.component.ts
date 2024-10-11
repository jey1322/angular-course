import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<any> = [];

  constructor() {
    this.titulo = 'Componente peliculas';
    this.peliculas= [
      {tittle: "Spiderman 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfepnWs21xgsNLDNZ7evdgW4q62Y6AdKfzQ&s"},
      {tittle: "Los vengadores", image: "https://es.web.img3.acsta.net/pictures/14/03/10/10/35/587504.jpg"},
      {tittle: "Batman vs Superman", image: "https://m.media-amazon.com/images/I/91Cr-CBxoAL._AC_UF1000,1000_QL80_.jpg"}
    ]
    console.log('PeliculasComponent constructor lanzado');
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log('PeliculasComponent ngOnInit iniciado');
  }

  ngDoCheck() {
    console.log('PeliculasComponent ngDoCheck iniciado');
  }

  cambiarTitulo(){
    this.titulo = 'El titulo ha sido cambiado';
  }

  ngOnDestroy(): void {
    console.log("El componente se va a eliminar");
  }

}
