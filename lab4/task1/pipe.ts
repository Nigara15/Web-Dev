import {Component} from '@angular/core';
import {LowerCasePipe} from 'angular/common';
@Component({
  selector: 'app-root',
  template: ` {{ loudMessage|lowercase }} `,
  imports: [LowerCasePipe],
})
export class App {
  username = 'yOunGTECh';
  loadMessage='we think you are doing great!'
}
