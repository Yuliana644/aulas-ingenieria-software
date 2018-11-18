import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcursosComponent } from './crearcursos.component';

describe('CrearcursosComponent', () => {
  let component: CrearcursosComponent;
  let fixture: ComponentFixture<CrearcursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
