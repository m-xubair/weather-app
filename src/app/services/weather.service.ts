import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of } from "rxjs";

const base_url = environment.base_url;
const APPID = environment.APPID;

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  // get current location of user
  getCurrentLocation(): any {
    const locationObservable = new Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          observer.next(position);
        });
      }
    });
    return locationObservable;
  }

  // get all available cities from json file
  getAvailableCities() {
    return this.http.get("assets/cities-list.json");
  }

  // get weather forcast of city by its coordinates
  // we are getting this for main summary page, it should be for current city if its location is allowed by user
  get5DaysForcastByCoordinates(coordinates) {
    const units = JSON.parse(localStorage.getItem("selectedUnit"));

    let params = new HttpParams();
    params = params.append("lat", coordinates.latitude);
    params = params.append("lon", coordinates.longitude);
    params = params.append("units", units);
    params = params.append("APPID", APPID);

    return this.http.get(`${base_url}/data/2.5/forecast`, {
      params: params
    });
  }

  // get cities forcast by ids, for more than one city
  getWeatherForMoreCities(citiesIds) {
    const units = JSON.parse(localStorage.getItem("selectedUnit"));

    let params = new HttpParams();
    params = params.append("id", citiesIds);
    params = params.append("units", units);
    params = params.append("APPID", APPID);

    return this.http.get(`${base_url}/data/2.5/group`, {
      params: params
    });
  }

  // get 5 days forcast of any city by its id
  get5DaysForcastOfCity(cityId) {
    const units = JSON.parse(localStorage.getItem("selectedUnit"));

    let params = new HttpParams();
    params = params.append("id", cityId);
    params = params.append("units", units);
    params = params.append("APPID", APPID);

    return this.http.get(`${base_url}/data/2.5/forecast`, {
      params: params
    });
  }

  // get weather forcast of city by city name
  getWeatherByCity(city) {
    const units = JSON.parse(localStorage.getItem("selectedUnit"));

    let params = new HttpParams();
    params = params.append("q", city);
    params = params.append("units", units);
    params = params.append("APPID", APPID);

    return this.http.get(`${base_url}/data/2.5/weather`, {
      params: params
    });
  }
}
