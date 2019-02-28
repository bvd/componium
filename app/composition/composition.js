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
      x: 0,
      width: 200,
      height: 290,
      color: "red",
      name: {
        position: 50,
        text: "High Strings",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 0,
          y: 40,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 55,
          y: 40,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 110,
          y: 40,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        }
      ]
    },
    {
      x: 200,
      width: 200,
      height: 290,
      color: "green",
      name: {
        position: 50,
        text: "Wood",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        }
      ]
    },
    {
      x: 400,
      width: 200,
      height: 290,
      color: "violet",
      name: {
        position: 50,
        text: "Low Strings",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        }
      ]
    },
    {
      x: 600,
      width: 200,
      height: 290,
      color: "turqoise",
      name: {
        position: 50,
        text: "Brass",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        }
      ]
    },
    {
      x: 800,
      width: 160,
      height: 290,
      color: "gray",
      name: {
        position: 50,
        text: "Percussion",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#D8BFD8"
        }
      ]
    },
  ];
}]);