angular.module('componiumApp').factory('compositionService',  ['storageService', function(storageService) {  
    return {
        loadComposition: function(){
            storageService.loadComposition();
        }
	};
}]);