'use strict';

var app = angular.module('componiumApp.musicList', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/musicList', {
    templateUrl: 'musicList/musicList.html',
    controller: 'musicListCtrl'
  });
}]);

app.controller('musicListCtrl', ['$scope', '$http', 'musicListService', function($scope, $http, musicListService) {
  $scope.searchValue = "";
  $scope.musicListData = [];
  $scope.pageNum = 0;
  $scope.pageLength = 5;
  $scope.numTotalAvailable;
  $scope.callSearchApi = function(v){
    var baseUrl = "https://ikcomponeer.search.windows.net/indexes/compositions/docs?";
		var apiKey = "5C786992BAD2D02B860322F087751D3B";
    var apiVersion = "2016-09-01";
    var url = baseUrl;
    if(v == "")
    {
			url += "search=*";
    }
    else
    {
			url += "queryType=full";
			url += "&search=/.*" + v + ".*/";
		}
		url += "&$top=" + $scope.pageLength;
		url += "&$count=true";
		url += "&$skip=" + ($scope.pageLength * $scope.pageNum);
		url += "&$orderby=time desc&$filter=published eq true";
    url += "&api-version=" + apiVersion;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET",
      "headers": {
        "api-key": apiKey,
        "content-type": "application/json",
        "cache-control": "no-cache"
      }
    };

    var req = {
      method: 'GET',
      url: url,
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        "cache-control": "no-cache"
      }
     }
     
     $http(req).then(function(d){
       $scope.musicListData = d.data.value;
       $scope.numTotalAvailable = d.data['@odata.count'];
     }, function(e){
       console.log("error");
       console.log(e);
     });
  }
}]);