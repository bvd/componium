'use strict';

// Declare app level module which depends on views, and core components
angular.module('componiumApp', [
  'ngRoute',
  'componiumApp.composition',
  'componiumApp.musicList',
  'componiumApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/composition'});
}]);
