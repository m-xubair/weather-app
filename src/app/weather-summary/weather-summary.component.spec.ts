import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSummary } from './weather-summary.component';

describe('WeatherSummary', () => {
  let component: WeatherSummary;
  let fixture: ComponentFixture<WeatherSummary>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherSummary]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
