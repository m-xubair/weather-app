import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "city-weather-details",
  templateUrl: "./city-weather-details.component.html",
  styleUrls: ["./city-weather-details.component.css"]
})
export class CityWeatherDetails implements OnInit {
  routeParams = this.activeRoute.snapshot.params;
  cityId: any;
  cityName: any;
  weatherData: any = [];
  loading = false;
  errorMessage: string = "";

  constructor(
    private activeRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    // get the city id and name from params.
    this.cityId = this.routeParams.id;
    this.cityName = this.routeParams.name;

    // get 5 days forcast
    this.city5DaysForcast(this.cityId);
    // true the loading while fetching the data
    this.loading = true;
  }

  // get hourly forcast of one city by its id.
  city5DaysForcast(cityId) {
    this.errorMessage = "";
    this.weatherService.get5DaysForcastOfCity(cityId).subscribe(
      res => {
        let response: any = res;
        this.weatherData = response.list;

        // show day of the week only once for all hours
        this.weatherData.map((item, index, array) => {
          item.dt_txt = new Date(item.dt_txt);
          if (index === 0) item["newDay"] = true;
          if (
            index !== 0 &&
            item.dt_txt.getDay() !== array[index - 1].dt_txt.getDay()
          ) {
            item["newDay"] = true;
          }
          return item;
        });
        this.loading = false;
      },
      err => {
        let error: any = err;
        this.errorMessage =
          "There is a problem while fetching the results try again!";
      }
    );
  }
}
