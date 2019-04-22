import { Component } from "@angular/core";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-weather-summary",
  templateUrl: "./weather-summary.component.html",
  styleUrls: ["./weather-summary.component.css"]
})
export class WeatherSummary {
  loading = false;
  today: any;
  selectedCities: any = [];
  weatherData: any = [];
  currentCityForecast: any;
  errorMessage: string = "";

  constructor(private weatherService: WeatherService) {
    // get the current location of user
    // by default we will show current city weather for user where he is
    this.weatherService.getCurrentLocation().subscribe(res => {
      let currentLocation: any = res;
      this.toDayForcastBy(currentLocation.coords);
    });

    // get user selected cities
    this.selectedCitiesMethod();
  }

  // get the current weather by location coordinates for today forcast.
  toDayForcastBy(coordinates) {
    this.loading = true;

    this.weatherService.get5DaysForcastByCoordinates(coordinates).subscribe(
      res => {
        let currentCity: any = res;
        this.currentCityForecast = currentCity;
        this.loading = false;

        // show day of the week only once for all hours
        this.currentCityForecast.list.map((item, index, array) => {
          item.dt_txt = new Date(item.dt_txt);
          if (index === 0) {
            this.today = item;
          }
          if (
            index !== 0 &&
            item.dt_txt.getDay() !== array[index - 1].dt_txt.getDay()
          ) {
            item["newDay"] = true;
          }
          return item;
        });
      },
      err => {
        this.loading = false;
        console.log("err:", err);
      }
    );
  }

  // get the selected cities
  selectedCitiesMethod() {
    this.selectedCities = JSON.parse(localStorage.getItem("selectedCities"));

    if (this.selectedCities == null) return;
    // fetching cities ids
    let ids: any[] = this.selectedCities.map(element => {
      return element.id;
    });
    let cities = ids.toString();

    // remove the ',' from last id
    const lastChar = cities.charAt(cities.length - 1);
    if (lastChar === ",") cities = cities.slice(0, -1);

    this.loading = true;
    // get weather of all selected cities
    if (cities) this.weatherOfCities(cities);
  }

  // get weather of all selected cities
  weatherOfCities(cities) {
    this.errorMessage = "";
    // ids should be in string like = '524901,703448,2643743'
    this.weatherService.getWeatherForMoreCities(cities).subscribe(
      res => {
        let response: any = res;
        this.weatherData = response.list;
        this.loading = false;
      },
      err => {
        let error: any = err;
        this.loading = false;
        this.errorMessage =
          "There is a problem while fetching the results try again!";
      }
    );
  }
}
