import { Component, OnInit, ViewChild } from "@angular/core";
import { NgImageSliderComponent } from "ng-image-slider";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"],
})
export class VideosComponent implements OnInit {
  @ViewChild("video") slider?: NgImageSliderComponent;

  videos: Array<object> = [
    {
      image: "assets/images/videos/matthias-mullie-F4LHE4PBWEA-unsplash.jpg",
      thumbImage:
        "assets/images/videos/matthias-mullie-F4LHE4PBWEA-unsplash.jpg",
      alt: "Image 1",
      title: "Image 1",
    },
    {
      image: "assets/images/videos/alessandra-paredes-xFMs8uI_IyA-unsplash.jpg",
      thumbImage:
        "assets/images/videos/alessandra-paredes-xFMs8uI_IyA-unsplash.jpg",
      alt: "Image 2",
      title: "Image 2",
    },
    {
      image: "assets/images/videos/luisana-zerpa-8c1BwjNd2WQ-unsplash.jpg",
      thumbImage: "assets/images/videos/luisana-zerpa-8c1BwjNd2WQ-unsplash.jpg",
      alt: "Image 3",
      title: "Image 3",
    },
    {
      image: "assets/images/videos/manolo-gomes-kQt5KVwt4rM-unsplash.jpg",
      thumbImage: "assets/images/videos/manolo-gomes-kQt5KVwt4rM-unsplash.jpg",
      alt: "Image 4",
      title: "Image 4",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
