import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Angular2SampleService {
  constructor() {}

  doWork() {
    console.log(
      '[Angular2] => This function was called from an Angular2 Service'
    );
  }
}
