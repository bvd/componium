'use strict';

var app = angular.module('componiumApp.composition', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/composition', {
    templateUrl: 'composition/composition.html',
    controller: 'compositionCtrl'
  });
}]);

app.controller('compositionCtrl', ['$scope', function ($scope) {

  $scope.tracks = [
    {
      height: 35,
      color: "pink",
      clips: [
        {
          position: 110,
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
          position: 160,
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
          position: 110,
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
          position: 180,
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
          position: 150,
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
          position: 140,
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
      name: {
        position: 9,
        text: "high Strings",
        fontFamily: "'Arvo',sherif",
        fontSize: 28,
        color: "#778899",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#87CEFA",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#87CEFA",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#87CEFA",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          height: 35,
          width: 50,
          color: "#87CEFA",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          height: 35,
          width: 50,
          color: "#87CEFA",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          height: 35,
          width: 50,
          color: "#87CEFA",
          tag: "B3"
        }
      ]
    },
    {
      x: 185,
      width: 190,
      height: 290,
      name: {
        position: 55,
        text: "wood",
        fontFamily: "'Arvo',sherif",
        fontSize: 28,
        color: "#778899",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#00FF00",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#00FF00",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#00FF00",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          height: 35,
          width: 50,
          color: "#00FF00",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          height: 35,
          width: 50,
          color: "#00FF00",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          height: 35,
          width: 50,
          color: "#00FF00",
          tag: "B3"
        }
      ]
    },
    {
      x: 375,
      width: 190,
      height: 290,
      name: {
        position: 15,
        text: "low strings",
        fontFamily: "'Arvo',sherif",
        fontSize: 28,
        color: "#778899",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "B3"
        }
      ]
    },
    {
      x: 565,
      width: 190,
      height: 290,
      name: {
        position: 50,
        text: "brass",
        fontFamily: "'Arvo',sherif",
        fontSize: 28,
        color: "#778899",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "B3"
        }
      ]
    },
    {
      x: 755,
      width: 190,
      height: 290,
      name: {
        position: 15,
        text: "percussion",
        fontFamily: "'Arvo',sherif",
        fontSize: 28,
        color: "#778899",
      },
      clips: [
        {
          x: 0,
          y: 0,
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "A1"
        },
        {
          x: 55,
          y: 0,
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "A2"
        },
        {
          x: 110,
          y: 0,
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "A3"
        },
        {
          x: 0,
          y: 40,
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "B1"
        },
        {
          x: 55,
          y: 40,
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "B2"
        },
        {
          x: 110,
          y: 40,
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "B3"
        }
      ]
    },
  ];
}]);