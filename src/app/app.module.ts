import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";

// import services
import { AppRoutingModule } from "src/app/app.routing.module";
import { AuthService } from "./services/auth.service";
import { WeatherService } from "src/app/services/weather.service";

// import components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { WeatherSummary } from "./weather-summary/weather-summary.component";
import { CitiesManagement } from "./management-cities/management-cities.component";
import { SettingComponent } from "./setting/setting.component";
import { AuthGuard } from "src/app/services/auth.guard";
import { CityWeatherDetails } from "./city-weather-details/city-weather-details.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeatherSummary,
    CitiesManagement,
    SettingComponent,
    CityWeatherDetails,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rectangleBounce,
      backdropBackgroundColour: "rgba(0, 0, 0, 0.56)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff"
    })
  ],
  providers: [AuthService, WeatherService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
