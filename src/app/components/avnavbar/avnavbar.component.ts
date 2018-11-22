import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'avnavbar',
  templateUrl: './avnavbar.component.html',
  styleUrls: ['./avnavbar.component.css'],
})
export class AvnavbarComponent implements OnInit{

  show = false;

  constructor() {
    const user = JSON.parse(window.localStorage.getItem('authUser'))
    console.log(user)
    if(user != null){
      this.show = true;
    }else{
      this.show = false;
    }
   }


  ngOnInit () {

  }

  logout(e: any) {
    localStorage.removeItem('authUser')
    this.show = false;
  }

}
