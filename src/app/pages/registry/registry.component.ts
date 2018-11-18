import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  formRegistro: FormGroup;
  submitted = false;

  tipodoc = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.formRegistro = this.formBuilder.group({
      primerNombre: ['yuliana', Validators.required],
      segNombre: ['andrea'],
      primerApellido: ['carrillo', Validators.required],
      email: ['yuliana@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]],
      passwordConf: ['12345678', [Validators.required, Validators.minLength(8)]],
      tipodoc: [this.tipodoc, [Validators.required]]
  });
  }

  ngAfterViewInit() {
    let sl = document.querySelectorAll('select');
    M.FormSelect.init(sl, {});
    let date = document.querySelectorAll('.datepicker');
    M.Datepicker.init(date, {});
  }

  get f() { return this.formRegistro.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formRegistro.invalid) {
        return;
    }

    console.log(this.formRegistro.getRawValue()
  }

}
