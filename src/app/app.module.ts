import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import { SampleService } from '../app-angularjs/services/SampleService.js';
import * as angular from './../app-angularjs/lib/angular'; // Import angular from angularjs -> https://stackoverflow.com/a/45970772
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular2SampleService } from './sample.service';

/**
 * AngularJS
 */
setAngularJSGlobal(angular); // Set angular globally
const ngApp = angular.module('myApp', []).service('myService', SampleService);
const myServiceProvider = {
  provide: 'oldOne',
  useFactory: ($i) => $i.get('myService'),
  deps: ['$injector'],
};

/**
 * Angular 2+
 */
@NgModule({
  imports: [BrowserModule, AppRoutingModule, UpgradeModule],
  declarations: [AppComponent],
  providers: [myServiceProvider, Angular2SampleService], // Add the service provider in Angular
  // bootstrap: [AppComponent]  We should disabled that to bootstrap manually
  entryComponents: [AppComponent], // Add entryComponents to bootstrap manuaaly
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap(app: ApplicationRef) {
    this.upgrade.bootstrap(document.body, [ngApp.name]); // 4th -> Use the UpgradeModule to get AngularJS
    app.bootstrap(AppComponent); // Bootstrap the  Angular2 app
  }
}
