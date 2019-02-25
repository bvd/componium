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
  $scope.quantizePoints = 
  
  $scope.tracks = [
    {
      height: 35,
      color: "pink",
      clips: [
        {
          position: 20,
          width: 35,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#D8BFD8"
        }
      ]
    },
    {
      height: 35,
      color: "plum",
      clips: [
        {
          position: 20,
          width: 35,
          color: "#D8BFD8"
        },
        {
          position: 80,
          width: 27,
          color: "#FF0000"
        }
      ]
    },
    {
      height: 35,
      color: "pink",
      clips: [
        {
          position: 20,
          width: 35,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#D8BFD8"
        },
      ]
    },
    {
      height: 35,
      color: "plum",
      clips: [
        {
          position: 0,
          width: 35,
          color: "#D8BFD8"
        },
        {
          position: 80,
          width: 27,
          color: "#FF0000"
        }
      ]
    },
    {
      height: 35,
      color: "pink",
      clips: [
        {
          position: 5,
          width: 35,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 27,
          color: "#D8BFD8"
        }
      ]
    },
    {
      height: 35,
      color: "plum",
      clips: [
        {
          position: 10,
          width: 35,
          color: "#D8BFD8"
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
      name: "Wood",
      size: 35,
      color: "plum",
      font: "'Arvo', serif",
      margin: "20px",
      clips: [
        {
          position:"10",
          width: "40px",
          height: "30px",
          color: "#87CEFA"
        },
        {
          position:"40",
          width: "40px",
          height: "30px",
          color: "#87CEFA"
        }
        //... etc
      ]
    },
    {
      name: "Brass",
      size: 35,
      color: "plum",
      font: "'Arvo', serif",
      margin:"20px",
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