import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosService } from './services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaAlumnosComponent,
    AlumnosComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AlumnosService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
