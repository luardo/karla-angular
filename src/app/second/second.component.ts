import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  personaje: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://swapi.dev/api/people/12/').subscribe( (resultado) => {
      this.personaje = resultado;
    } )
  }

}
