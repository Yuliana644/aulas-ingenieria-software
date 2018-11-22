import { Component } from '@angular/core';
import { RestfullService } from './services/restfull.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tipodoc:any[];
  constructor(public restfullservice: RestfullService)
    {
    }

    title = 'TipDoc';
}
