import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-location',
  templateUrl: './banner-location.component.html',
  styleUrls: ['./banner-location.component.css']
})
export class BannerLocationComponent implements OnInit {
  public readonly lat = 10.477570410845576;
  public readonly lon = -66.54061216057099;

  constructor() {
  }

  ngOnInit(): void {
  }

}
