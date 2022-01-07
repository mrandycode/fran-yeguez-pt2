import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent  {
  topNav = "primary-navigation";
  faBars = faBars;

  constructor(router: Router) {
    router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView();
          }
        }
      }
    });
  }


  toggle(): void {
    if (this.topNav === "primary-navigation") {
      this.topNav += " responsive";
    } else {
      this.topNav = "primary-navigation";
    }
  }

  closeNav(): void {
    this.topNav = "primary-navigation";
  }

}
