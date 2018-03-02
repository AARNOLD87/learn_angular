import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathlabComponent } from './mathlab.component';

describe('MathlabComponent', () => {
  let component: MathlabComponent;
  let fixture: ComponentFixture<MathlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
