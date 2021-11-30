import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './core/videos/videos.component';
import { NewsComponent } from './core/news/news.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AdvertinsingComponent } from './core/advertinsing/advertinsing.component';
import { AdvertisingService } from './core/services/advertising.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';
import { RssComponent } from './shared/rss/rss.component';
import { VolunteeringComponent } from './core/volunteering/volunteering.component';
import { BannerVolunteeringComponent } from './core/volunteering/banner-volunteering/banner-volunteering.component';
import { BannerEquinoComponent } from './core/equino/banner-equino/banner-equino.component';
import { RadioComponent } from './core/radio/radio.component';
import { BannerRadioComponent } from './core/radio/banner-radio/banner-radio.component';
import { LocationComponent } from './core/location/location.component';
import { AgmCoreModule } from '@agm/core';
import { BannerLocationComponent } from './core/location/banner-location/banner-location.component';

const components = [
  VideosComponent,
  NewsComponent,
  AdvertinsingComponent
];

@NgModule({
  declarations: [
    AppComponent,
    components,
    FooterComponent,
    RssComponent,
    VolunteeringComponent,
    BannerVolunteeringComponent,
    BannerEquinoComponent,
    RadioComponent,
    BannerRadioComponent,
    LocationComponent,
    BannerLocationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  exports: [
    components,
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AdvertisingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
