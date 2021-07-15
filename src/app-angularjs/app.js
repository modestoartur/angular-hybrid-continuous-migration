'use strict';

class AngularJSSampleService {
  doWork() {
    console.log('This function was called from an AngularJS Service');
  }
}
// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ])
  .service('angularJSSampleService', AngularJSSampleService)
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo: '/view1'
    });
  }]);
