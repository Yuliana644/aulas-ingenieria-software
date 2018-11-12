import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RestfullService} from './services/restfull.service' 
import { RestfullComponent } from './services/restfull/restfull.component';
// animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//material
import {MaterialModule} from './material';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    RestfullComponent,
    LoginComponent,
    SidenavComponent
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
