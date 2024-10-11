import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public title: string;

  constructor() {
    this.title = 'Ultimos articulos';
  }

}
