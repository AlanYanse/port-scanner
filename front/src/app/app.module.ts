import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsolaComponent } from './consola/consola.component';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TraeResultadoService } from './services/trae-resultado.service';
import { ComunicationService } from './services/comunication.service';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FormularioComponent,
    ConsolaComponent
  ],
  providers: [ TraeResultadoService, ComunicationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/