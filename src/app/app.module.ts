import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AvnavbarComponent } from './components/avnavbar/avnavbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    RestfullComponent,
    LoginComponent,
    SidenavComponent,
    AvnavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
    AppComponent,
    RestfullService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
