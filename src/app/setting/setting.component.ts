import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.css"]
})
export class SettingComponent implements OnInit {
  selectedUnit: any;
  constructor() {}

  ngOnInit() {
    // set temp units.
    const unit = JSON.parse(localStorage.getItem("selectedUnit"));
    this.selectedUnit = unit;
  }

  // change the units on user selection.
  selectUnit() {
    localStorage.setItem("selectedUnit", JSON.stringify(this.selectedUnit));
  }
}
