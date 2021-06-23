import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public enviado = false;
  favoriteColor;

  nombre;
  apellido;
  edad;


  constructor() {


   }

  ngOnInit() {
  }

  enviar() {


    this.guardar(this.nombre, this.apellido, this.edad);
  }

  private guardar(nombre, appelido, edad) {


  }
}
