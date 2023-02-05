import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styleUrls: ['./consola.component.css']
})
export class ConsolaComponent implements OnInit {

  info: string;

  constructor(private _comunicationService: ComunicationService) { }

  ngOnInit() {
    this._comunicationService.comunication$.subscribe((data: string)=>{

      console.log(`me mandó esta data ${data} el formulario`);
      this.info = data;
    });

  }

}