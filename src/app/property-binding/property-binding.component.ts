import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagen: string;

  constructor() { }

  ngOnInit() {
    const logoWhite = 'assets/santander-white.svg';
    const logoRed = 'assets/santander-red.svg';

    setInterval(() => {
      this.imagen === logoWhite ? this.imagen = logoRed : this.imagen = logoWhite;
    }, 1000)
  }

}
