import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondEmployeeComponent } from './second-employee.component';

describe('SecondEmployeeComponent', () => {
  let component: SecondEmployeeComponent;
  let fixture: ComponentFixture<SecondEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
