import { Component } from '@angular/core';
import { RestfullService } from '../../../services/restfull.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public cursos:any[];
  constructor(public restfullservice: RestfullService) {
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
