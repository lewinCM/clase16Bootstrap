import { Component } from '@angular/core';
import { Alumnos } from 'src/app/interfaces/alumnos.interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newAlumno:Alumnos | any

  constructor(){
  
  }

}
