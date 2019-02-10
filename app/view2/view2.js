'use strict';

angular.module('componiumApp.musicList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/musicList', {
    templateUrl: 'musicList/musicList.html',
    controller: 'musicListCtrl'
  });
}])

.controller('musicListCtrl', [function() {

}]);