import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoestudiantesComponent } from './listadoestudiantes.component';

describe('ListadoestudiantesComponent', () => {
  let component: ListadoestudiantesComponent;
  let fixture: ComponentFixture<ListadoestudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoestudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
