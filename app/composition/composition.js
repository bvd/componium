'use strict';

var app = angular.module('componiumApp.composition', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/composition', {
    templateUrl: 'composition/composition.html',
    controller: 'compositionCtrl'
  });
}]);

app.controller('compositionCtrl', ['$scope', function ($scope) {

  $scope.buttonOrangeText1 = 'MUZIEK LIJST';
  $scope.buttonOrangeText2 = 'OVER DEZE<br/>APPLICATIE';
  $scope.scrollText = 'TOUR DE FRANCE';
  $scope.sloganText = 'Love and light<br/>the Love is all around, each moment of our life, inside and outside<br/>we just have to open our doors to let it in';
  $scope.text2 ='Name : Wonder Woman';
  $scope.text1 ='Composition : Spirit Birds';

  $scope.numTracks = 6;
  $scope.trackHeight = 35;
  $scope.trackWidth = 828;

  $scope.tracks = [
    {
      color: "pink",
      clips: [
        {
          position: 20,
          width: 35,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 35,
          color: "#D8BFD8"
        }
      ]
    },
    {
      color: "plum",
      clips: [
        {
          position: 160,
          width: 35,
          color: "#D8BFD8"
        },
        {
          position: 80,
          width: 35,
          color: "#FF0000"
        }
      ]
    },
    {
      color: "pink",
      clips: [
        {
          position: 110,
          width: 35,
          color: "#00FF00"
        },
        {
          position: 0,
          width: 35,
          color: "#D8BFD8"
        },
      ]
    },
    {
      color: "plum",
      clips: [
        {
          position: 180,
          width: 35,
          color: "#D8BFD8"
        },
        {
          position: 40,
          width: 35,
          color: "#FF0000"
        }
      ]
    },
    {
      color: "pink",
      clips: [
        {
          position: 150,
          width: 35,
          color: "#00FF00"
        },
        {
          position: 80,
          width: 35,
          color: "#D8BFD8"
        }
      ]
    },
    {
      color: "plum",
      clips: [
        {
          position: 140,
          width: 35,
          color: "#D8BFD8"
        },
        {
          position: 80,
          width: 35,
          color: "#FF0000"
        }
      ]
    }
  ];

  // the number of points can vary
  // it's different for each music set
  $scope.numberOfPoints = 13;
  var distance = $scope.trackWidth / $scope.numberOfPoints;
  $scope.pointPositions = [];

  for (var i = 0; i < $scope.numberOfPoints; i++) {
    var position = i * distance;
    var rounded = Math.round(position);
    $scope.pointPositions.push(rounded);
  }
  console.log($scope.pointPositions);


  $scope.parts = [
    {
      x: 0,
      width: 190,
      height: 290,
      color: "pink",
      name: {
        position: 9,
        text: "High Strings",
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
      color: "white",
      name: {
        position: 53,
        text: "Wood",
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
      color: "pink",
      name: {
        position: 15,
        text: "Low Strings",
      },
      clips: [
        {
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "A1"
        },
        {
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "A2"
        },
        {
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "A3"
        },
        {
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "B1"
        },
        {
          height: 35,
          width: 50,
          color: "#FF00FF",
          tag: "B2"
        },
        {
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
      color: "white",
      name: {
        position: 54,
        text: "Brass",
      },
      clips: [
        {
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "A1"
        },
        {
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "A2"
        },
        {
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "A3"
        },
        {
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "B1"
        },
        {
          height: 35,
          width: 50,
          color: "#FFD700",
          tag: "B2"
        },
        {
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
      color: "pink",
      name: {
        position: 17,
        text: "Percussion",
      },
      clips: [
        {
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "A1"
        },
        {
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "A2"
        },
        {
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "A3"
        },
        {
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "B1"
        },
        {
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "B2"
        },
        {
          height: 35,
          width: 50,
          color: "#FF6347",
          tag: "B3"
        }
      ]
    },
  ];
}]);