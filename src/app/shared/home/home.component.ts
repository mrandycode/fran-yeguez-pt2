import { Component, OnInit } from '@angular/core';
import {
  faMicrophone,
  faHandshake,
  faGlobe,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faGlobe = faGlobe;
  faMicrophone = faMicrophone;
  faHandshake = faHandshake;
  faExclamation = faExclamation;

  constructor() { }

  ngOnInit(): void {
  }

}
