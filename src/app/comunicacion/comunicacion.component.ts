import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComandosService } from '../comandos.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css'],
  providers: [ComandosService]
})
export class ComunicacionComponent implements OnInit {

  comando = "Prueba";
  resultado = "";

  constructor(private http: ComandosService) { }

  enviarComando(){
    this.http.respuestaLlamdoServlet(this.comando).subscribe((data:any)=>{
      this.resultado = data.comando;
      for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
          document.getElementById(i+""+j).innerHTML = "";
        }
      }
      if(this.resultado == "Peon a A4"){
        document.getElementById("30").innerHTML = "&#9817;";
      }
    });
    //alert("ya");
  }

  ngOnInit() {
  }

}
