import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AvnavbarComponent } from './avnavbar.component';

describe('AvnavbarComponent', () => {
  let component: AvnavbarComponent;
  let fixture: ComponentFixture<AvnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvnavbarComponent],
      imports: [
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
