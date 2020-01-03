//Creando un componente desde cero
// 1. importar esto:
import {Component} from '@angular/core';
// 2. Utilizar el decorador componente importante poner las 2 propiedades que son obligatorias:
@Component({
// 3. El selector para indicarle la etiqueta que se va generar la directiva
    selector: 'mi-componente',
    templateUrl: './mi_componente.component.html'
    //Cambiamos template por templateUrl y le indicamos la ruta donde pegamos el codigo.
})
export class MiComponente{

// Puedo definir mis propias propiedades
    public titulo: string;
    public comentario: string;
    public ano: number;

    constructor(){
        // Le puedo dar un valor a las propiedades que he creado
        this.titulo = "Esta es una propiedad creada  llamada TITULO";
        this.comentario = "Esta es una propiedad creada por mi llamada COMENTARIO"
        this.ano = 2020;

        console.log("Componente mi-componente cargado !!");
        //alert(this.titulo);
    }
}

// Para que funcione debo ir a app.module para que funcione e importar la clase MiComponente

