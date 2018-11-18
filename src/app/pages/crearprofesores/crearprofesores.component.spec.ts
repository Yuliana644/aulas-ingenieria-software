import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearprofesoresComponent } from './crearprofesores.component';

describe('CrearprofesoresComponent', () => {
  let component: CrearprofesoresComponent;
  let fixture: ComponentFixture<CrearprofesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearprofesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearprofesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
