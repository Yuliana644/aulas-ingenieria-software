import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcursosComponent } from './modificarcursos.component';

describe('ModificarcursosComponent', () => {
  let component: ModificarcursosComponent;
  let fixture: ComponentFixture<ModificarcursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
