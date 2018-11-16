import { Component } from '@angular/core';
import { RestfullService } from '../../services/restfull.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public cursos:any[];
  constructor(public restfullservice: RestfullService) 
  {
      this.restfullservice.getCursos().subscribe(
          result => 
          {
              //console.log("CODE",result.code)
              if (result.code != 200) 
              {
                  this.cursos = result;
              } 
              else 
              {
                  console.log("asd")
                  this.cursos = result.data;
              }
          },
          error => 
          {
              console.log(<any>error);
          }
      );
  }  

}
