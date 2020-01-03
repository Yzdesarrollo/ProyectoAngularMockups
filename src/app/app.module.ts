import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Permite cargar configuraciones para la aplicacion completa para poder declararlo en cualquier parte.
import { AppComponent } from './app.component';
// Aqui importamos la clase que creamos 
// indicarle donde esta decirle la ruta de donde esta ubicado
import { MiComponente } from './components/mi_componente/mi_componente.component';
@NgModule({
  declarations: [
    AppComponent,
    MiComponente
  ],
  imports: [
    BrowserModule // Cargar los modulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
