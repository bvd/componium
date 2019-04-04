'use strict';

var app = angular.module('componiumApp.composition',['ngRoute']);

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
          color: "#00FF00",
          tag: "A1"
        },
        {
          position: 80,
          width: 35,
          color: "#D8BFD8",
          tag: "B3"
        }
      ]
    },
    {
      color: "plum",
      clips: [
        {
          position: 160,
          width: 35,
          color: "#D8BFD8",
          tag: "A2"
        },
        {
          position: 80,
          width: 35,
          color: "#FF0000",
          tag: "A3"
        }
      ]
    },
    {
      color: "pink",
      clips: [
        {
          position: 110,
          width: 35,
          color: "#00FF00",
          tag: "A2"
        },
        {
          position: 0,
          width: 35,
          color: "#D8BFD8",
          Tag: "B1"
        },
      ]
    },
    {
      color: "plum",
      clips: [
        {
          position: 180,
          width: 35,
          color: "#D8BFD8",
          tag: "A3"
        },
        {
          position: 40,
          width: 35,
          color: "#FF0000",
          tag: "B3"
        }
      ]
    },
    {
      color: "pink",
      clips: [
        {
          position: 150,
          width: 35,
          color: "#00FF00",
          tag: "A3"
        },
        {
          position: 80,
          width: 35,
          color: "#D8BFD8",
          tag: "A1"
        }
      ]
    },
    {
      color: "plum",
      clips: [
        {
          position: 140,
          width: 35,
          color: "#D8BFD8",
          tag: "B2"
        },
        {
          position: 80,
          width: 35,
          color: "#FF0000",
          tag: "A1"
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
      color: "pink",
      name: {
        text: "High Strings",
      },
      clips: [
        {
          color: "#87CEFA",
          tag: "A1"
        },
        {
          color: "#87CEFA",
          tag: "A2"
        },
        {
          color: "#87CEFA",
          tag: "A3"
        },
        {
          color: "#87CEFA",
          tag: "B1"
        },
        {
          color: "#87CEFA",
          tag: "B2"
        },
        {
          color: "#87CEFA",
          tag: "B3"
        }
      ]
    },
    {
      color: "white",
      name: {
        text: "Wood",
      },
      clips: [
        {
          color: "#00FF00",
          tag: "A1"
        },
        {
          color: "#00FF00",
          tag: "A2"
        },
        {
          color: "#00FF00",
          tag: "A3"
        },
        {
          color: "#00FF00",
          tag: "B1"
        },
        {
          color: "#00FF00",
          tag: "B2"
        },
        {
          color: "#00FF00",
          tag: "B3"
        }
      ]
    },
    {
      color: "pink",
      name: {
        text: "Low Strings",
      },
      clips: [
        {
          color: "#FF00FF",
          tag: "A1"
        },
        {
          color: "#FF00FF",
          tag: "A2"
        },
        {
          color: "#FF00FF",
          tag: "A3"
        },
        {
          color: "#FF00FF",
          tag: "B1"
        },
        {
          color: "#FF00FF",
          tag: "B2"
        },
        {
          color: "#FF00FF",
          tag: "B3"
        }
      ]
    },
    {
      color: "white",
      name: {
        text: "Brass",
      },
      clips: [
        {
          color: "#FFD700",
          tag: "A1"
        },
        {
          color: "#FFD700",
          tag: "A2"
        },
        {
          color: "#FFD700",
          tag: "A3"
        },
        {
          color: "#FFD700",
          tag: "B1"
        },
        {
          color: "#FFD700",
          tag: "B2"
        },
        {
          color: "#FFD700",
          tag: "B3"
        }
      ]
    },
    {
      color: "pink",
      name: {
        text: "Percussion",
      },
      clips: [
        {
          color: "#FF6347",
          tag: "A1"
        },
        {
          color: "#FF6347",
          tag: "A2"
        },
        {
          color: "#FF6347",
          tag: "A3"
        },
        {
          color: "#FF6347",
          tag: "B1"
        },
        {
          color: "#FF6347",
          tag: "B2"
        },
        {
          color: "#FF6347",
          tag: "B3"
        }
      ]
    },
  ];
}]);