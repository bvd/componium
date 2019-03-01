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
      width: 190,
      height: 290,
      color: "red",
      name: {
        position: 4,
        text: "high Strings",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B3"
        }
      ]
    },
    {
      x: 185,
      width: 190,
      height: 290,
      color: "green",
      name: {
        position: 60,
        text: "wood",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B3"
        }
      ]
    },
    {
      x: 375,
      width: 190,
      height: 290,
      color: "violet",
      name: {
        position: 12,
        text: "low strings",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B3"
        }
      ]
    },
    {
      x: 565,
      width: 190,
      height: 290,
      color: "turqoise",
      name: {
        position: 50,
        text: "brass",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B3"
        }
      ]
    },
    {
      x: 755,
      width: 190,
      height: 290,
      color: "gray",
      name: {
        position: 15,
        text: "percussion",
        fontFamily: "'Arvo',sherif",
        fontSize: 30,
        color: "#483D8B",
      },
      clips: [
        {
          x: 0,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          r: 7,
          height: 35,
          width: 50,
          color: "#D8BFD8",
          tag: "B3"
        }
      ]
    },
  ];
}]);