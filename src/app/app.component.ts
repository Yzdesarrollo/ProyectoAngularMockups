// Componente: Es una pequeña parte de la aplicacion.
//app.component.ts
//Es una clase de javascript 
import { Component } from '@angular/core';
// Esto es un decorador contiene las propiedades que va tener el component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // Le podemos indicar los modificadores public,private,protect etc..
 public title = 'SOUNDCLOUDIFY';
}
