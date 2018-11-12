import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RestfullService} from './services/restfull.service' 
import { RestfullComponent } from './services/restfull/restfull.component';
import {HelloWorld} from './iniciocomponente/inicio.component';
// animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//material
import {MaterialModule} from './material';
import { from } from 'rxjs';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
@NgModule({
  declarations: [
    AppComponent,
    RestfullComponent,
    HelloWorld,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AppComponent,
    RestfullService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
