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
    this.http.respuestaLlamdoServlet(this.comando).subscribe((data:any)=>{this.resultado = data.comando;});
    //alert("ya");
  }

  ngOnInit() {
  }

}
