import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static'; // import UpgradeModule -> https://stackoverflow.com/a/45970772
import * as angular from './../app-angularjs/lib/angular'; // Import angular from angularjs -> https://stackoverflow.com/a/45970772
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
setAngularJSGlobal(angular); // Set angular globally

const ngApp = angular.module('myApp', []);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UpgradeModule],
  providers: [],
  // bootstrap: [AppComponent]  We disabled that to bootstrap manuaaly
  entryComponents: [AppComponent], // Add entryComponents to bootstrap manuaaly
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap(app: ApplicationRef) {
    this.upgrade.bootstrap(document.body, [ngApp.name]); // 4th -> Use the UpgradeModule to get AngularJS
    app.bootstrap(AppComponent); // Bootstrap the app
  }
}
