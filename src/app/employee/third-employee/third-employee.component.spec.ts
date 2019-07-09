import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdEmployeeComponent } from './third-employee.component';

describe('ThirdEmployeeComponent', () => {
  let component: ThirdEmployeeComponent;
  let fixture: ComponentFixture<ThirdEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
