// Componente: Es una pequeña parte de la aplicacion.
//app.component.ts
//Es una clase de javascript 
import { Component } from '@angular/core';
// Esto es un decorador contiene las propiedades que va tener el component 
@Component({
  //tiene un SELECTOR la etiqueta app-root que se muestra en el index.html son parametros que le pasamos que le pasamos a una clase para configurar el componente.

  selector: 'app-root',
  //TEMPLATEurl indicarle que vista y donde esta esa vista asociada al componente.
  templateUrl: './app.component.html',
  //STYLEUrls es la propiedad en la cual le indicamos hojas de estilos para este componente
  styleUrls: ['./app.component.sass']
})
//lA CLASS que exportamos para poderla importar en otros componentes 
export class AppComponent {
  // Le podemos indicar los modificadores public,private,protect etc..
 public title = 'SOUNDCLOUDIFY';
}
