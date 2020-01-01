angular.module('componiumApp').factory('signalRService', ['$rootScope', function ($rootScope) {
    var connection = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:7071/api')
    .configureLogging(signalR.LogLevel.Information)
    .build();
    connection.start().then(() => console.log("signalR connection successfully initialized")).catch(console.error);
    connection.onclose(() => console.log('disconnected'));
    return {
      on: function (eventName, callback) {
        connection.on(eventName, function () {  
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(connection, args);
          });
        });
      }
    };
  }]);