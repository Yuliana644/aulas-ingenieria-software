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
import { LoginComponent } from './pages/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AvnavbarComponent } from './components/avnavbar/avnavbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RegistryComponent } from './pages/registry/registry.component';
import { CoursesComponent } from './pages/courses/index/courses.component';
import { CoursesShowComponent } from './pages/courses/show/courses-show.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch :'prefix', 
    redirectTo: 'inicio'
  },
  {
  path: 'inicio',
  component: InicioComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistryComponent
  },
  {
    path:'cursos',
    children: [
      { path: '', component: CoursesComponent },
      { path: ':id', component: CoursesShowComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RestfullComponent,
    LoginComponent,
    SidenavComponent,
    InicioComponent,
    AvnavbarComponent,
    RegistryComponent,
    CoursesComponent,
    CoursesShowComponent
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
