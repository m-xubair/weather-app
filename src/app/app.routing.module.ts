import { Routes, RouterModule } from "@angular/router";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { AuthGuard } from "src/app/services/auth.guard";

// import components
import { LoginComponent } from "src/app/login/login.component";
import { WeatherSummary } from "src/app/weather-summary/weather-summary.component";
import { CitiesManagement } from "./management-cities/management-cities.component";
import { CityWeatherDetails } from "src/app/city-weather-details/city-weather-details.component";
import { SettingComponent } from "src/app/setting/setting.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "weather-summary",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "weather-summary",
    component: WeatherSummary,
    canActivate: [AuthGuard]
  },
  {
    path: "city-details/:name/:id",
    component: CityWeatherDetails,
    canActivate: [AuthGuard]
  },
  {
    path: "manage-cities",
    component: CitiesManagement,
    canActivate: [AuthGuard]
  },
  {
    path: "settings",
    component: SettingComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
