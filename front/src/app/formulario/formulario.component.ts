import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComunicationService } from '../services/comunication.service';
import { TraeResultadoService } from '../services/trae-resultado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnDestroy {

  host: string;
  puerto: number;
  loading: boolean = false;
  suscripcion: Subscription;

  constructor(private _traeResultadoService: TraeResultadoService, private _comunicationService: ComunicationService) { }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  escanear(): void{

    //this.loading = true;

    // Se prepara el objeto que será procesado en el backend
    const body = {
      "url": this.host,
      "puerto": this.puerto
    }
    
    this.suscripcion = this._traeResultadoService.getResultado(body).subscribe(data =>{

      console.log(data);
  
      this.enviandoMensaje(data.message);
      
    });

  }

  limpiar(): void{
    this.host = "";
    this.puerto = undefined;
    this.enviandoMensaje("");
  }

  enviandoMensaje(data): void{
    // Cargar de datos al observable
    this._comunicationService.sendComunication(data);
  }



}