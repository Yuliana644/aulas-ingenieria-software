import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../../../services/restfull.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
  styleUrls: ['./courses-show.component.css']
})
export class CoursesShowComponent implements OnInit{
  id: number;
  private sub: any;
  public curso: {};
  constructor(private route: ActivatedRoute, public restfullservice: RestfullService) {
    this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
     });
    this.restfullservice.getCurso(this.id).subscribe(
      result => 
      {
          //console.log("CODE",result.code)
          if (result.code != 200) 
          {
              console.log(result[0])
              this.curso = result[0];
          } 
          else 
          {
              console.log("asd")
              this.curso = result.data;
          }
      },
      error => 
      {
          console.log(<any>error);
      }
      );
  }

  ngOnInit() {
    
  }
}
