import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./../services/weather.service";

@Component({
  selector: "management-cities",
  templateUrl: "./management-cities.component.html",
  styleUrls: ["./management-cities.component.css"]
})
export class CitiesManagement implements OnInit {
  availableCities: any = [];
  city: any;
  selectedCities: any = [];
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private weatherService: WeatherService) {
    this.getAvailableCities();
  }

  ngOnInit() {
    this.selectedCities = JSON.parse(localStorage.getItem("selectedCities"));
  }

  // get all available cities
  getAvailableCities() {
    this.weatherService.getAvailableCities().subscribe(res => {
      let response: any = res;
      this.availableCities = response;
    });
  }

  // add new city
  addCity() {
    this.clearMessages();
    this.city.toLowerCase();

    // check the city if its available in our database
    const isCityAvailable = this.availableCities.find(element => {
      return element.name.toLowerCase() === this.city.toLowerCase();
    });
    if (this.selectedCities == null) this.selectedCities = [];

    // add the city to selected list if its available in our database
    if (isCityAvailable) {
      // avoid to add the city if its already added
      const cityAlreadyAdded = this.selectedCities.find(element => {
        return element.id === isCityAvailable.id;
      });
      if (cityAlreadyAdded) {
        this.errorMessage = ` ${this.city} is already added!`;
        return;
      }

      this.selectedCities.push(isCityAvailable);
      this.successMessage = `${
        this.city
      } is added successfully in your settings.`;

      // add the selected cities to localstorage
      localStorage.setItem(
        "selectedCities",
        JSON.stringify(this.selectedCities)
      );
    } else {
      this.errorMessage = ` ${
        this.city
      } is incorrect or not Available in our batabase! `;
    }

    // clear the input
    this.city = "";
  }

  // remove city
  removeCity() {
    this.clearMessages();
    this.city.toLowerCase();

    if (this.selectedCities == null) this.selectedCities = [];
    let removingCity = this.selectedCities.find(element => {
      return element.name.toLowerCase() === this.city;
    });

    const index = this.selectedCities.indexOf(removingCity);

    if (index == -1) {
      this.errorMessage = `${
        this.city
      } is not available in your selected cities!`;
    } else {
      this.selectedCities.splice(index, 1);

      // update the selected cities in local storage
      localStorage.setItem(
        "selectedCities",
        JSON.stringify(this.selectedCities)
      );
      this.successMessage = `${this.city} is removed successfully.`;
    }
    this.city = "";
  }

  // clear error and success messages
  clearMessages() {
    this.errorMessage = "";
    this.successMessage = "";
  }
}
