angular.module('componiumApp').factory('buttonsService', ['storageService', function(storageService) {  
    return {
        orangeButtonLeftData: {
            text: "" 
        },
        orangeButtonRightData : {
            text: ""
        }
	};
}]);