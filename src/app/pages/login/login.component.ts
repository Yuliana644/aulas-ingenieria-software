import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestfullService } from '../../services/restfull.service';
import { Router } from '@angular/router';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'avlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public restfullservice: RestfullService, private router: Router) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      loginEmail: ['yuliana@gmail.com	', [Validators.required, Validators.email]],
      loginPass: ['12345678', [Validators.required]]
    });

    this.formBuilder.group

  }

  ngAfterViewInit() {
    M.updateTextFields();
  }

  get f() { return this.formLogin.controls; }

  onSubmit() {
    // stop here if form is invalid
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
    let student = this.formLogin.getRawValue()
    console.log(student)
    this.restfullservice.loginStudent(student).subscribe(
      result =>
      {
        if(result.status == 200){
          const authUser = {
            user : ''
          }
          authUser.user = result.msg[0]
          localStorage.setItem('authUser', JSON.stringify(authUser))
          this.router.navigate(['/inicio'])
        }
      },
      error =>
      {
          console.log(<any>error);
      }
    );
  }
}
