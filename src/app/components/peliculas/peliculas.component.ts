import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = 'Componente peliculas';
    console.log('PeliculasComponent constructor lanzado');
  }

  ngOnInit() {
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
