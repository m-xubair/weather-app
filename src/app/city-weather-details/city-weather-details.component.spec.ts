import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeatherService } from 'src/app/services/weather.service';
import { CityWeatherDetails } from './city-weather-details.component';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('CityWeatherDetails', () => {
  let component: CityWeatherDetails;
  let fixture: ComponentFixture<CityWeatherDetails>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityWeatherDetails],
      imports: [
        HttpClientTestingModule,
        NgxLoadingModule,
        ngxLoadingAnimationTypes,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [WeatherService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
