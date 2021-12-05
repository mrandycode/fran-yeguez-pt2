import { Component } from '@angular/core';
import { Constants } from './constants/constants';
import { faCoffee, faMicrophone, faHandshake, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fran-yeguez-pt2';
  faGlobe = faGlobe;
  faMicrophone = faMicrophone;
  faHandshake = faHandshake;
  LOREM_IPSUM_L = Constants.LOREM_IPSUM_L;
  FRAN_Y = Constants.FRAN_Y;
}
