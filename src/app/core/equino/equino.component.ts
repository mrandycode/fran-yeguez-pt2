import { Component, OnInit } from "@angular/core";
import { ImagesEquino } from "./models/images-equino";

@Component({
  selector: "app-equino",
  templateUrl: "./equino.component.html",
  styleUrls: ["./equino.component.css"],
})
export class EquinoComponent implements OnInit {

  assets = '/assets/images/equino/'
  images = new Array<ImagesEquino>();
  constructor() {
    this.imagesIterator();
  }

  ngOnInit(): void {}

  imagesIterator() {
    for (let i = 1; i < 16; i++) {
      const images = new ImagesEquino();
      images.name = "Equino-" + i + '.jpg';
      this.images.push(images);
    }

    console.log(this.images, 'images');
  }
}
