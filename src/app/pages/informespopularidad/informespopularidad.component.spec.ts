import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformespopularidadComponent } from './informespopularidad.component';

describe('InformespopularidadComponent', () => {
  let component: InformespopularidadComponent;
  let fixture: ComponentFixture<InformespopularidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformespopularidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformespopularidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
