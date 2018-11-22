import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RestfullService } from '../../services/restfull.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  formPerfil: FormGroup;
  submitted = false;
  tipodoc:any[];
  tipogen:any[];
  user = JSON.parse(window.localStorage.getItem('authUser'));
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
    if (this.user != null){
      this.formPerfil = this.formBuilder.group({
        idPersona: [this.user.user.id_persona],
        primerNombre: [this.user.user.nom1_pers, Validators.required],
        segNombre: [this.user.user.nom2_pers],
        primerApellido: [this.user.user.apll1_pers, Validators.required],
        segundoApellido: [this.user.user.apll2_pers],
        numdoc: [this.user.user.num_doc_pers, [Validators.required]],
        dateBirth: [this.user.user.fec_nac_pers],
        email: [this.user.user.correo_pers, [Validators.required, Validators.email]],
        password: [this.user.user.apll2_pers, [Validators.required, Validators.minLength(8)]],
        passwordConf: [this.user.user.apll2_pers, [Validators.required, Validators.minLength(8)]],
        sltipodoc: [this.user.user.id_tipdoc, [Validators.required]],
        sltipogen: [this.user.user.id_genero],
        address: [this.user.user.direccio_pers]
      });
    } else {
      this.formPerfil = this.formBuilder.group({
        primerNombre: ['', Validators.required],
        segNombre: [''],
        primerApellido: ['', Validators.required],
        segundoApellido: [''],
        numdoc: ['', [Validators.required]],
        dateBirth: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordConf: ['', [Validators.required, Validators.minLength(8)]],
        sltipodoc: ['', [Validators.required]],
        sltipogen: [''],
        address: ['']
      });
    }


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
      ],
      'defaultDate': '2018-12-01',
      'setDefaultDate': true,
    });
    let sl = document.querySelectorAll('select');
    M.FormSelect.init(sl, {});
  }

  get f() { return this.formPerfil.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.formPerfil.invalid) {
    //     return;
    // }
    let date = M.Datepicker.getInstance(document.getElementById('date'))
    this.formPerfil.controls['dateBirth'].setValue(date.toString())
    let person = this.formPerfil.getRawValue()
    console.log(person)

    this.restfullservice.editPerson(person).subscribe(
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
