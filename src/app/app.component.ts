import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "weather-app";

  constructor(public authService: AuthService) {}

  ngOnInit() {
    // check if unit is already selected otherwise set it celcius by default.
    const unit = JSON.parse(localStorage.getItem("selectedUnit"));
    const selectedUnit = unit ? unit : "metric";
    localStorage.setItem("selectedUnit", JSON.stringify(selectedUnit));
  }
}
