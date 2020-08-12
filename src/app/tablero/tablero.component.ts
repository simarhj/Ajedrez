import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  jugador1 : Jugador = {
    id : 1,
    color : "white",
    nombre : "Simar"
  };
  jugador2 : Jugador = {
    id : 2,
    color : "black",
    nombre : "PC"
  };

  filas = [];


  constructor() { 
    for(var i=0; i<8; i++){
      this.filas[i] = [];
      for(var j=0; j<8; j++){
        if((i + j) % 2 == 0){
          this.filas[i][j]= 'posicion2';
        }else{
          this.filas[i][j]= 'posicion1';
        }
      }
    }
  }
  
  

  ngOnInit() {
  }

}

