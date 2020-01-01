'use strict';

var app = angular.module('componiumApp.composition', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/composition/:compositionId', {
    templateUrl: 'composition/composition.html',
    controller: 'compositionCtrl'
  });
}]);

app.filter('trustUrl', ['$sce', function ($sce) {
  return function (url) {
    return $sce.trustAsResourceUrl(url);
  };
}]);

app.controller('compositionCtrl', [
  '$scope',
  '$routeParams',
  'domainModel',
  'signalRService',
  'storageService',
  function ($scope, $routeParams, domainModel, signalRService, storageService) {
    
    signalRService.on('newMessage', function(data){
      $scope.domainModel.messageReceived.text = data.text;
    });

    $scope.compositionId = $routeParams.compositionId;

    $scope.hideModalIdentification = function(){
      $scope.domainModel.showModalBackground = false;
      $scope.domainModel.showModalIdentification = false;
    }
    
    $scope.closeModalIdentification = function(){
      $scope.hideModalIdentification();
      storageService.sendToQueue({
        Type: 'Ikc2020.Events.Composition.OpenComposition, Ikc2020, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null',
        compositionId: $scope.compositionId,
        userName: domainModel.userName,
        schoolName: domainModel.schoolName
      });
    }

    $scope.trackWidth = 826;
    $scope.domainModel = domainModel;
    
    domainModel.loadComposition($scope.compositionId)
      .then(loadCompositionSuccess, loadCompositionError);

    /*if(domainModel.user == null){
      modalService.Open("identification-modal");
      
      this.loadModalIdentificationForm({
        name: "",
        school: "",
        town: "",
        class: ""
      });
    }*/

    function loadCompositionSuccess() {
      console.log("loaded successfully");
    }

    function loadCompositionError() {
      console.log("load error");
    }

    $scope.onLeftScrollArrowClick = function () {
      if ($scope.domainModel.scrollData.selectedItem == 0) {
        $scope.domainModel.scrollData.selectedItem = $scope.domainModel.scrollData.items.length - 1;
      }
      else {
        $scope.domainModel.scrollData.selectedItem -= 1;
      }
    }

    $scope.onRightScrollArrowClick = function () {
      if ($scope.domainModel.scrollData.selectedItem == $scope.domainModel.scrollData.items.length - 1) {
        $scope.domainModel.scrollData.selectedItem = 0;
      }
      else {
        $scope.domainModel.scrollData.selectedItem += 1;
      }
    }
    

    // onMouseOver(clip) https://docs.angularjs.org/api/ng/directive/ngMouseover
    // onMouseOut(clip) https://docs.angularjs.org/api/ng/directive/ngMouseleave

    //$scope.orangeButtonLeftText = domainModel.buttonsData.orangeButtonLeftData.text;
    //$scope.orangeButtonRightText = domainModel.buttonsData.orangeButtonRightData.text;

    // $scope.scrollText = 'TOUR DE FRANCE';
    //$scope.scrollData = scrollService.scrollData;

    // $scope.sloganText = 'Love and light<br/>the Love is all around, each moment of our life, inside and outside<br/>we just have to open our doors to let it in';
    // $scope.text2 = 'Name : Wonder Woman';
    // $scope.text1 = 'Composition : Spirit Birds';
    // $scope.trackHeight = 35;

    // $scope.tracks = [
    //   {
    //     color: "pink",
    //     clips: [
    //       {
    //         position: 20,
    //         width: 50,
    //         color: "#00ffdd",
    //         tag: "A1"
    //       },
    //       {
    //         position: 80,
    //         width: 35,
    //         color: "#ad9a26",
    //         tag: "B3"
    //       }
    //     ]
    //   },
    //   {
    //     color: "#dbaddd",
    //     clips: [
    //       {
    //         position: 160,
    //         width: 50,
    //         color: "#ed1010",
    //         tag: "A2"
    //       },
    //       {
    //         position: 20,
    //         width: 35,
    //         color: "#e506a6",
    //         tag: "A3"
    //       }
    //     ]
    //   },
    //   {
    //     color: "pink",
    //     clips: [
    //       {
    //         position: 110,
    //         width: 50,
    //         color: "#09e1ed",
    //         tag: "A2"
    //       },
    //       {
    //         position: 0,
    //         width: 50,
    //         color: "#0de2c6",
    //         tag: "B1"
    //       },
    //     ]
    //   },
    //   {
    //     color: "#dbaddd",
    //     clips: [
    //       {
    //         position: 180,
    //         width: 50,
    //         color: "#e2c931",
    //         tag: "A3"
    //       },
    //       {
    //         position: 40,
    //         width: 50,
    //         color: "#13d6bc",
    //         tag: "B3"
    //       }
    //     ]
    //   },
    //   {
    //     color: "pink",
    //     clips: [
    //       {
    //         position: 200,
    //         width: 50,
    //         color: "#0ddae5",
    //         tag: "A3"
    //       },
    //       {
    //         position: 80,
    //         width: 50,
    //         color: "#00ffdd",
    //         tag: "A1"
    //       }
    //     ]
    //   },
    //   {
    //     color: "#dbaddd",
    //     clips: [
    //       {
    //         position: 140,
    //         width: 50,
    //         color: "#ceb82f",
    //         tag: "B2"
    //       },
    //       {
    //         position: 20,
    //         width: 50,
    //         color: "#FF0000",
    //         tag: "A1"
    //       }
    //     ]
    //   }
    // ];

    // // the number of points can vary
    // // it's different for each music set
    // $scope.numberOfPoints = 13;
    // var distance = $scope.trackWidth / $scope.numberOfPoints;
    // $scope.pointPositions = [];

    // for (var i = 0; i < $scope.numberOfPoints; i++) {
    //   var position = i * distance;
    //   var rounded = Math.round(position);
    //   $scope.pointPositions.push(rounded);
    // }

    //$scope.compositionData = compositionService.compositionData;

    // $scope.marginBetweenClips = 1;
    // $scope.parts = [
    //   {
    //     color: "pink",
    //     width: 200,

    //     name: {
    //       text: "High Strings",
    //     },
    //     clips: [
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#07ebf7",
    //         tag: "A1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#09e1ed",
    //         tag: "A2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#0ddae5",
    //         tag: "A3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#11d5e0",
    //         tag: "B1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#15ccd6",
    //         tag: "B2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#18c3cc",
    //         tag: "B3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1bbcc4",
    //         tag: "C1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#20abb2",
    //         tag: "C2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#219fa5",
    //         tag: "C3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#24989e",
    //         tag: "D1"
    //       },
    //       {
    //         width: 50,
    //         height: 35,
    //         color: "#258c91",
    //         tag: "D2"
    //       },
    //       {
    //         width: 50,
    //         height: 35,
    //         color: "#278589",
    //         tag: "D3"
    //       },
    //       {
    //         width: 50,
    //         height: 35,
    //         color: "#298084",
    //         tag: "E1"
    //       },
    //       {
    //         width: 50,
    //         height: 35,
    //         color: "#27767a",
    //         tag: "E2"
    //       },
    //       {
    //         width: 50,
    //         height: 35,
    //         color: "#296c70",
    //         tag: "E3"
    //       }
    //     ]
    //   },
    //   {
    //     color: "white",
    //     width: 150,

    //     name: {
    //       text: "Wood",
    //     },
    //     clips: [
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#00ffdd",
    //         tag: "A1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#04f7d7",
    //         tag: "A2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#09edcf",
    //         tag: "A3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#0de2c6",
    //         tag: "B1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#0fd8be",
    //         tag: "B2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#13d6bc",
    //         tag: "B3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#16ccb3",
    //         tag: "C1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#19c1aa",
    //         tag: "C2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1bbaa4",
    //         tag: "C3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1eb5a0",
    //         tag: "D1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1eaa97",
    //         tag: "D2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1ea08e",
    //         tag: "D3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1f9685",
    //         tag: "E1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1f897a",
    //         tag: "E2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#1d7568",
    //         tag: "E3"
    //       }
    //     ]
    //   },
    //   {
    //     color: "pink",
    //     width: 210,

    //     name: {
    //       text: "Low Strings",
    //     },
    //     clips: [
    //       {

    //         width: 80,
    //         height: 35,
    //         color: "#ff02b7",
    //         tag: "A1"
    //       },
    //       {

    //         width: 100,
    //         height: 35,
    //         color: "#ef04ad",
    //         tag: "A2"
    //       },
    //       {

    //         width: 35,
    //         height: 35,
    //         color: "#e506a6",
    //         tag: "A3"
    //       },
    //       {

    //         width: 70,
    //         height: 35,
    //         color: "#e204a3",
    //         tag: "B1"
    //       },
    //       {

    //         width: 120,
    //         height: 35,
    //         color: "#db069e",
    //         tag: "B2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#d10a98",
    //         tag: "B3"
    //       },
    //       {
    //         width: 90,
    //         height: 35,
    //         color: "#c40b8f",
    //         tag: "C1"
    //       },
    //       {

    //         width: 150,
    //         height: 35,
    //         color: "#b70e87",
    //         tag: "C2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#a5107b",
    //         tag: "C3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#991373",
    //         tag: "D1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#91176f",
    //         tag: "D2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#8e196e",
    //         tag: "D3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#7f1963",
    //         tag: "E1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#7f1c64",
    //         tag: "E2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#751d5d",
    //         tag: "E3"
    //       }
    //     ]
    //   },
    //   {
    //     color: "white",
    //     width: 220,

    //     name: {
    //       text: "Brass",
    //     },
    //     clips: [
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#f9dc27",
    //         tag: "A1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#edd22a",
    //         tag: "A2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#e2c931",
    //         tag: "A3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#d1ba30",
    //         tag: "B1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#ceb82f",
    //         tag: "B2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#ad9a26",
    //         tag: "B3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#a0902b",
    //         tag: "C1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#96872b",
    //         tag: "C2"
    //       },
    //       {
    //         width: 50,
    //         height: 35,
    //         color: "#91832e",
    //         tag: "C3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#8c7f2f",
    //         tag: "D1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#84782f",
    //         tag: "D2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#827732",
    //         tag: "D3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#7c7233",
    //         tag: "E1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#726a32",
    //         tag: "E2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#706833",
    //         tag: "E3"
    //       }
    //     ]
    //   },
    //   {
    //     color: "pink",
    //     width: 180,

    //     name: {
    //       text: "Percussion",
    //     },
    //     clips: [
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#ff0a0a",
    //         tag: "A1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#ed1010",
    //         tag: "A2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#e01414",
    //         tag: "A3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#db1818",
    //         tag: "B1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#cc1a1a",
    //         tag: "B2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#c11d1d",
    //         tag: "B3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#b21e1e",
    //         tag: "C1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#af2121",
    //         tag: "C2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#aa2323",
    //         tag: "C3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#9e2424",
    //         tag: "D1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#962525",
    //         tag: "D2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#8e2626",
    //         tag: "D3"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#872727",
    //         tag: "E1"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#822929",
    //         tag: "E2"
    //       },
    //       {

    //         width: 50,
    //         height: 35,
    //         color: "#772828",
    //         tag: "E3"
    //       }
    //     ]
    //   },
    // ];

    //$scope.partsData = partsService.partsData;

    //compositionService.loadComposition('5969');

  }]);