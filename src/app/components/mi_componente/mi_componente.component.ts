//Creando un componente desde cero
// 1. importar esto:
import {Component} from '@angular/core';
// 2. Utilizar el decorador componente importante poner las 2 propiedades que son obligatorias:
@Component({
// 3. El selector para indicarle la etiqueta que se va generar la directiva
    selector: 'mi-componente',
    template: `
        <h1>Hola Mundo</h1>
        <p>Este es mi primer componente</p>
`
})
export class MiComponente{

    constructor(){
        console.log("Componente mi-componente cargado !!");
    }
}

