import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  actor = {
    apellidos: 'De Niro',
    nombre: 'Robert',
    fNac: new Date(1943, 7, 17)
  }

  constructor() { }

  ngOnInit() {
  }

  getEdad() {
    const edad = ( new Date().getTime() - this.actor.fNac.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return Math.ceil(edad);
  }

}
