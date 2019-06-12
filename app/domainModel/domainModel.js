angular.module('componiumApp').factory('domainModel', ['storageService', '$q', function (storageService, $q) {
    return {
        
        millisecondsToPixels: function(milliseconds){
            var totalPixels = 820;
            var millisecondsPerBeat = (60 * 1000) / this.BpmTempo;
            var lengthInBeats = this.NumeratorMeasure * this.DenominatorZoom;
            var totalMilliseconds = millisecondsPerBeat * lengthInBeats;
            var pixelsPerMillisecond = totalPixels / totalMilliseconds;
            var width = pixelsPerMillisecond * milliseconds;
            return width;
        },
        onScrollItemAdded: function (item) {
            this.scrollData.items.push(
                {
                    name: item.Name,
                    id: item.Id
                });
        },
        scrollGetSelectedItemName: function () {
            return this.scrollData.items[this.scrollData.selectedItem].name;
        },
        scrollData: {
            selectedItem: 0,
            items: []
        },
        onTrackHeightConfigured: function(TrackHeightConfiguredEvent){
            this.trackHeight = TrackHeightConfiguredEvent.TrackHeight;
        },
        trackHeight: 0,
        onMusicPartCreated: function (MusicPartCreatedEvent) {
            this.parts.push(
                {
                    width: MusicPartCreatedEvent.width,
                    name: {
                        text: MusicPartCreatedEvent.name
                    },
                    id: MusicPartCreatedEvent.id,
                    clips: []
                });
            // console.log("good luck, see also https://github.com/bvd/componium/commit/8b8e265d3fbe708f4dc077635ed49fe7f6dfa8fc?diff=split");
        },

        parts: [],

        onMusicClipCreated: function (musicClipCreatedEvent) {
            
            var calculatedWidth = this.millisecondsToPixels(musicClipCreatedEvent.exitpoint - musicClipCreatedEvent.entrypoint);
            
            var clip = {
                width: calculatedWidth,
                height: this.trackHeight,
                color: musicClipCreatedEvent.color,
                tag: musicClipCreatedEvent.tag
            };

            var relatedPartId = clip.partId;

            for(var i = 0; i < this.parts.length; i++){
                var iteratedPart = this.parts[i];
                if(!iteratedPart.id == relatedPartId){
                    continue;
                }
                var retrievedPart = iteratedPart;
                retrievedPart.clips.push(clip);
            }

        },
        onTempoDefined: function(TempoDefinedEvent){
            this.BpmTempo = TempoDefinedEvent.BpmTempo;
        },
        BpmTempo: 0,
        onMeasureDefined: function(MeasureDefinedEvent){
            this.DenominatorMeasure = MeasureDefinedEvent.Denominator;
            this.NumeratorMeasure = MeasureDefinedEvent.Numerator;
        },
        DenominatorMeasure: 0,
        NumeratorMeasure: 0,
        onZoomFactorChange: function (ZoomFactorChangeEvent){
            this.DenominatorZoom = ZoomFactorChangeEvent.Denominator;
        },
        DenominatorZoom : 0,
        onQuantizeGridChange: function (QuantizeGridChangeEvent){
            this.DenominatorQuantize = QuantizeGridChangeEvent.Denominator;
            this.NumeratorQuantize = QuantizeGridChangeEvent.Numerator;
        },
        DenominatorQuantize : 0,
        NumeratorQuantize : 0,
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
        loadComposition: function (id) {
            var deferred = $q.defer();
            var that = this;
            storageService.loadComposition(id).then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    var event = data[i];
                    var handlerNames = that.eventBindings[event.Type];
                    if (handlerNames) {
                        for (var ii = 0; ii < handlerNames.length; ii++) {
                            var fn = handlerNames[ii];
                            if(that.hasOwnProperty(fn) && typeof(that[fn] == "function"))
                                that[fn](event);
                            else
                                console.error("function " + fn +  " does not exist!!") 
                        }
                    } else {
                        console.log("no handler mapping found for the following event");
                        console.log(event);
                    }
                }
                deferred.resolve();
            }, function (error) {
                console.log("We have an error for you, can you find the cause?? Hahaha: " + error);
            });
            return deferred.promise;
        },
        eventBindings: {
            "JsonCompositionFromIkc2009.Events.Scroll.ScrollItemAdded, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onScrollItemAdded"],
            "JsonCompositionFromIkc2009.Events.MusicEnvironment.MusicPartCreated, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onMusicPartCreated"],
            "JsonCompositionFromIkc2009.Events.Config.TrackHeightConfigured, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onTrackHeightConfigured"],
            "JsonCompositionFromIkc2009.Events.MusicEnvironment.TempoDefined, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onTempoDefined"],
            "JsonCompositionFromIkc2009.Events.Config.ZoomFactorChange, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onZoomFactorChange"],
            "JsonCompositionFromIkc2009.Events.Config.QuantizeGridChange, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onQuantizeGridChange"],
            "JsonCompositionFromIkc2009.Events.MusicEnvironment.MeasureDefined, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null":["onMeasureDefined"],
            "JsonCompositionFromIkc2009.Events.MusicEnvironment.MusicClipCreated, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onMusicClipCreated"]
        }
    };
}]);