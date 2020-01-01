'use strict';

// Declare app level module which depends on views, and core components
angular.module('componiumApp', [
  'ngRoute',
  'ngSanitize',
  'componiumApp.composition',
  'componiumApp.musicList',
  'componiumApp.version',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/composition/6033'});
}]);
