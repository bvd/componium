'use strict';

var app = angular.module('componiumApp.composition', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/composition', {
    templateUrl: 'composition/composition.html',
    controller: 'compositionCtrl'
  });
}]);

app.controller('compositionCtrl', ['$scope', function ($scope) {

  $scope.myName = "Bertus and Léticia are some wonderful person who love each other with big energy inside !!";

  $scope.tracks = [
    {
      height: 34,
      color: "pink",
      clips: [
        {
          position: 20,
          width: 27,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#00FF00"
        }
      ]
    },
    {
      height: 34,
      clips: [
        {
          position: 20,
          width: 27,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#FF0000"
        }
      ]
    },
    {
      height: 34,
      clips: [
        {
          position: 20,
          width: 27,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#FF0000"
        },
      ]
    },
    {
      height: 34,
      clips: [
        {
          position: 20,
          width: 27,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#FF0000"
        }
      ]
    },
    {
      height: 34,
      clips: [
        {
          position: 20,
          width: 27,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#FF0000"
        }
      ]
    },
    {
      height: 34,
      clips: [
        {
          position: 20,
          width: 27,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#FF0000"
        }
      ]
    }
  ];

  $scope.parts = [
    {
      name: "wood",
      margin: "2px",
      clips: [
        {
          width: "27px",
          height: "60px",
          color: "#00FF00"
        },
        {
          width: "27px",
          height: "60px",
          color: "#FF0000"
        }
        //... etc
      ]
    },
    {
      name: "brass",
      margin: "2px",
      clips: [
        {
          width: "27px",
          height: "60px",
          color: "#FF0000"
        },
        {
          width: "27px",
          height: "60px",
          color: "#FF0000"
        }
        //... etc
      ]
    }
  ];
}]);