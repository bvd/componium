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
      names: [
        {
          position: 50,
          text: "Percussion",
          style: "font-family: 'Arvo',sherif",
          height: 30,
          color: "#483D8B",
        },
        {
          position: 200,
          text: "Percussion",
          style: "font-family: 'Arvo,sherif",
          height: 30,
          color: "#483D8B",
        }
      ],
      clips: [
        {
          position: 20,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          position: 75,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          position: 130,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        }
      ]
    },
  ];
}]);