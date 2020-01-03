import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Permite cargar configurciones para la aplicacion completa para poder declararlo en cualquier parte.
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule // Cargar los modulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
