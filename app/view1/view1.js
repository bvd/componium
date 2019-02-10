'use strict';

angular.module('componiumApp.composition', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/composition', {
    templateUrl: 'composition/composition.html',
    controller: 'compositionCtrl'
  });
}])

.controller('compositionCtrl', [function() {

}]);