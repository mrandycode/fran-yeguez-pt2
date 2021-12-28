import { Component, OnInit } from "@angular/core";
import {  faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  topNav = "topNav";
  faBars = faBars;

  constructor() {}

  ngOnInit(): void {
    this.toggle();
  }

  toggle(): void {
    if (this.topNav === "topnav") {
      this.topNav += " responsive";
    } else {
      this.topNav = "topnav";
    }
  }

  closeNav (): void{
    this.topNav = "topnav";
  }

}
