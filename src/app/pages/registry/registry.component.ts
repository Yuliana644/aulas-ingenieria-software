import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RestfullService } from '../../services/restfull.service';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
 })
export class RegistryComponent implements OnInit {
  formRegistro: FormGroup;
  submitted = false;
  tipodoc:any[];
  tipogen:any[];
  constructor(private formBuilder: FormBuilder, public restfullservice: RestfullService) {
    this.restfullservice.getTipDocs().subscribe(
      result =>
      {
          //console.log("CODE",result.code)
          if (result.code != 200)
          {
            this.tipodoc = result;
            setTimeout(()=>{
              let sl = document.querySelectorAll('select');
              M.FormSelect.init(sl, {});
            }, 500)
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
    this.restfullservice.getTipDocs().subscribe(
      result =>
      {
          //console.log("CODE",result.code)
          if (result.code != 200)
          {
            this.tipogen = result;
            setTimeout(()=>{
              let sl = document.querySelectorAll('select');
              M.FormSelect.init(sl, {});
            }, 500)
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

  ngOnInit() {
    this.formRegistro = this.formBuilder.group({
      primerNombre: ['yuliana', Validators.required],
      segNombre: ['andrea'],
      primerApellido: ['carrillo', Validators.required],
      segundoApellido: ['ramos'],
      numdoc: ['12345678', [Validators.required]],
      dateBirth: [''],
      email: ['yuliana@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]],
      passwordConf: ['12345678', [Validators.required, Validators.minLength(8)]],
      sltipodoc: ['1', [Validators.required]],
      sltipogen: [''],
      address: ['cra 7 # 8 56']
    });

    this.formBuilder.group

  }

  ngAfterViewInit() {
    M.updateTextFields();
    let date = document.querySelectorAll('.datepicker');
    M.Datepicker.init(date, {
      'format': 'yyyy-mm-dd',
      'firstDay': 1,
      months: [
        'Enero',
        'Febrero'
      ]
    });
    let sl = document.querySelectorAll('select');
    M.FormSelect.init(sl, {});
  }

  get f() { return this.formRegistro.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formRegistro.invalid) {
        return;
    }
    let date = M.Datepicker.getInstance(document.getElementById('date'))
    this.formRegistro.controls['dateBirth'].setValue(date.toString())
    let person = this.formRegistro.getRawValue()
    console.log(person)

    this.restfullservice.savePerson(person).subscribe(
      result =>
      {
        if(result.status == 200){
          console.log(result.msg)

        }
      },
      error =>
      {
          console.log(<any>error);
      }
    );
  }

}
