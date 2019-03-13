'use strict';

var app = angular.module('componiumApp.composition', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
$routeProvider.when('/composition', {
templateUrl: 'composition/composition.html',
controller: 'compositionCtrl'
});
}]);

var controleur = angular.module('compositionCtrl', []);

app.controller('compositionCtrl', ['$scope', function ($scope) {

  $scope.numTracks = 6;
  $scope.trackHeight = 35;
  $scope.trackWidth = 828;
  $scope.clipPosition1 = 80;
}]);