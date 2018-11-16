import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RestfullService} from './services/restfull.service' 
import { RestfullComponent } from './services/restfull/restfull.component';
// animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//router
import { RouterModule,Routes} from '@angular/router';

import { from } from 'rxjs';
import {InicioComponent} from './pages/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AvnavbarComponent } from './components/avnavbar/avnavbar.component';
import { LayoutModule } from '@angular/cdk/layout';

const appRoutes: Routes = [{
  path: '',
  pathMatch :'prefix', 
  redirectTo: 'inicio'
  }, {
  path: 'inicio',
  component: InicioComponent
  }, {
    path:'login',
    component: LoginComponent
  }]

@NgModule({
  declarations: [
    AppComponent,
    RestfullComponent,
    LoginComponent,
    SidenavComponent,
    InicioComponent,
    AvnavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( 
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [
    AppComponent,
    RestfullService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
