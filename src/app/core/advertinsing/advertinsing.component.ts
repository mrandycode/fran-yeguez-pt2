import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../services/advertising.service';
import { Images } from './models/advertising';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-advertinsing',
  templateUrl: './advertinsing.component.html',
  styleUrls: ['./advertinsing.component.css']
})


export class AdvertinsingComponent implements OnInit, AfterViewInit {

  automaticTime = 20000;
  animation = 'back_in_right';
  position = 0;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  public images: Array<Images> = [];
  todayNumber: number = Date.now();

  constructor(private advertisingService: AdvertisingService) {
  }

  ngOnInit(): void {
    this.getImages();
    this.generateRandom();
  }

  ngAfterViewInit(): void {

  }

  getImages(): void {
    this.advertisingService.getImagesAdvertising(this.generateRandom()).subscribe(
      response => {
        this.images = response;
        console.log(this.images, 'response');
      }
    );
  }

  generateRandom(): number {
    let randomNumber = this.todayNumber.toString();
    console.log(randomNumber);
    let subStt = randomNumber.substring(randomNumber.length, randomNumber.length - 1);
    return parseInt(subStt, 10);

  }

  automaticNext(): void {
    setInterval(() => {
      // this.animation = 'animate__animated animate__delay-3s animate__backInRight';
      this.animation = 'back_in_right';
      this.next();
      this.automaticTime = 20000;
    }, this.automaticTime);
  }

  next(): void {
    // this.animation = 'andy_custom';
    // this.automaticTime = 12000;
    if (this.position === this.images.length - 1) {
      this.position = 0;
    } else {
      this.position = this.position + 1;
    }
  }

  back(): void {
    // this.animation = 'andy_custom';
    // this.automaticTime = 12000;
    if (this.position === this.images.length) {
      this.position = this.images.length - 1;
    } else if (this.position === 0) {
      this.position = this.images.length - 1;
    } else {
      this.position = this.position - 1;
    }
  }

}
