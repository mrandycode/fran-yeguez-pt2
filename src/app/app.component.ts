import { Component } from "@angular/core";
import { Constants } from "./constants/constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showHome = true;
  title = "fran-yeguez-pt2";
  FRAN_Y = Constants.FRAN_Y;

  constructor() {

  }
}
