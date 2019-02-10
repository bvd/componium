'use strict';

var app = angular.module('componiumApp.musicList', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/musicList', {
    templateUrl: 'musicList/musicList.html',
    controller: 'musicListCtrl'
  });
}]);

app.controller('musicListCtrl', ['$scope', function($scope) {
  $scope.myNumber = 4;
}]);