import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../services/advertising.service';
import { Images } from './models/advertising';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-advertinsing',
  templateUrl: './advertinsing.component.html',
  styleUrls: ['./advertinsing.component.css']
})


export class AdvertinsingComponent implements OnInit, AfterViewInit {

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
    let randomNumber =  this.todayNumber.toString();
    console.log(randomNumber);
    let subStt = randomNumber.substring(randomNumber.length, randomNumber.length-1);
    console.log(subStt);
    return parseInt(subStt,10)

  }

}
