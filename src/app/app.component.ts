import { Component } from '@angular/core';
import { Constants } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fran-yeguez-pt2';

  LOREM_IPSUM_L = Constants.LOREM_IPSUM_L;
  FRAN_Y = Constants.FRAN_Y;
}
