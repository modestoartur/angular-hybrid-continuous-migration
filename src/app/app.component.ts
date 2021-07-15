import { Component, Inject } from '@angular/core';
import { SampleService } from '../app-angularjs/services/SampleService.js';
import { Angular2SampleService } from './sample.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-and-angularjs';

  constructor(
    @Inject('oldOne') myService: SampleService,
    angularService: Angular2SampleService
  ) {
    console.log('%c Angular Hybrid', 'font-size:22px');
    myService.doWork();
    angularService.doWork();
    console.log(
      "%c Now we're hybrid!",
      'font-size:30px;text-shadow: 3px 2px red;'
    );
  }
}
