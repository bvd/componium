angular.module('componiumApp').factory('domainModel', ['storageService', '$q', function (storageService, $q) {
    return {
        onScrollItemAdded : function(item){
            this.scrollData.items.push(
                {
                    name: item.Name, 
                    id: item.Id
                });
        },
        scrollGetSelectedItemName: function(){
            return this.scrollData.items[this.scrollData.selectedItem].name;
        },
        scrollData: {
            selectedItem: 0,
            items: []
        },
        buttonsData: {
            orangeButtonLeftData: {
                text: ""
            },
            orangeButtonRightData: {
                text: ""
            }
        },
        compositionData: { 
            compositionName: "",
            composerName: ""
        },
        loadComposition: function(id){
            var deferred = $q.defer();
            var that = this;
            storageService.loadComposition(id).then(function(data){
                for(var i = 0; i < data.length; i++){
                    var event = data[i];
                    var handlerNames = that.eventBindings[event.Type];
                    if(handlerNames){
                        for(var ii = 0; ii < handlerNames.length; ii++){
                            var fn = handlerNames[ii];
                            that[fn](event);
                        }
                    }else{
                        console.log("no handler for the following event");
                        console.log(event);
                    }
                }
                deferred.resolve();
            }, function(error){
                console.log("We have an error for you, can you find the cause?? Hahaha: " + error);
            });
            return deferred.promise;
        },
        eventBindings: {
            "JsonCompositionFromIkc2009.Events.Scroll.ScrollItemAdded, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onScrollItemAdded"]
        }
    };
}]);