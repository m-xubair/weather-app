import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesManagement } from './management-cities.component';

describe('CitiesManagement', () => {
  let component: CitiesManagement;
  let fixture: ComponentFixture<CitiesManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesManagement]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
