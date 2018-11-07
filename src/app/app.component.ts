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
        this.restfullservice.getTipDoc().subscribe(
            result => 
            {
                //console.log("CODE",result.code)
                if (result.code != 200) 
                {
                    console.log("lol",result);
                    this.tipodoc = result;
                } 
                else 
                {
                    console.log("asd")
                    this.tipodoc = result.data;
                }
            },
            error => 
            {
                console.log(<any>error);
            }
        );
    }  
      
    title = 'TipDoc';
}
