angular.module('componiumApp')
    .factory('domainModel',
        [
            'storageService',
            '$q',
            '$location',
            '$rootScope',
            function (storageService, $q, $location, $rootScope) {
                var that = this;
                return {
                    that: that,
                    signalRinitialized: false,
                    /*
                    newMessage: function (message) {
                        that.$get().messageReceived.text = message.text;
                        $rootScope.$apply();
                    },
                    messageToSend: "send this",
                    messageReceived: {
                        text: "received message will go here"
                    },
                    messageIndex: 0,
                    /*sendMessage: function(){
                        storageService.sendToQueue({
                            type: "Ikc2019.Events.TestEvents.Test1, Ikc2019, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                            text: this.messageToSend,
                            index: this.messageIndex
                        });
                        this.messageIndex += 1;
                    },*/
                    showModalBackground: true,
                    showModalIdentification: true,
                    onMusicListNavigation: function () {
                        $location.path('/musicList');
                    },
                    millisecondsToPixels: function (milliseconds) {
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
                                name: item.name,
                                id: item.id
                            });
                    },
                    scrollGetSelectedItemName: function () {
                        return this.scrollData.items[this.scrollData.selectedItem].name;
                    },
                    scrollGetSelectedItemId() {
                        return this.scrollData.items[this.scrollData.selectedItem].id;
                    },
                    scrollData: {
                        selectedItem: 0,
                        items: []
                    },
                    onCompositionCreated: function (CompositionCreatedEvent, deferred) {
                        this.composition.name = CompositionCreatedEvent.name;
                        this.composition.id = CompositionCreatedEvent.id;
                        this.scrollData.items.push({
                            name: this.composition.name,
                            id: this.composition.id
                        });
                        this.scrollData.selectedItem = this.scrollData.items.length - 1;
                        var done = {
                            scroll: false,
                            environment: false,
                            config: false
                        };
                        var canresolve = function (done, deferred) {
                            if (done.scroll && done.environment && done.config) {
                                deferred.resolve();
                            }
                        }

                        var that = this;
                        storageService.loadScroll(CompositionCreatedEvent.scroll).then(function (req) {
                            that.processEvents(req.data);
                            done.scroll = true;
                            canresolve(done, deferred);
                        }, function (error) {
                            console.log("error in loadScroll: " + error);
                        });
                        storageService.loadEnvironment(CompositionCreatedEvent.environment).then(function (req) {
                            that.processEvents(req.data);
                            done.environment = true;
                            canresolve(done, deferred);
                        }, function (error) {
                            console.log("error in loadEnvironment: " + error);
                        });
                        storageService.loadConfig(CompositionCreatedEvent.conf).then(function (req) {
                            that.processEvents(req.data);
                            done.config = true;
                            canresolve(done, deferred);
                        }, function (error) {
                            console.log("error in loadEnvironment: " + error);
                        });
                    },
                    composition: {
                        id: 0,
                        name: ""
                    },
                    onTrackHeightConfigured: function (TrackHeightConfiguredEvent) {
                        this.trackHeight = TrackHeightConfiguredEvent.TrackHeight;
                    },
                    onTrackHeightChanged: function (TrackHeightChangeEvent) {
                        this.trackHeight = TrackHeightChangeEvent.Value;
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
                                marginX: MusicPartCreatedEvent.marginX,
                                marginY: MusicPartCreatedEvent.marginY,
                                setId: MusicPartCreatedEvent.setId,
                                clips: []
                            });
                        // console.log("good luck, see also https://github.com/bvd/componium/commit/8b8e265d3fbe708f4dc077635ed49fe7f6dfa8fc?diff=split");
                    },

                    parts: [],

                    tracks: [],

                    onMusicClipCreated: function (musicClipCreatedEvent) {

                        var calculatedWidth = this.millisecondsToPixels(musicClipCreatedEvent.exitpoint - musicClipCreatedEvent.entrypoint);

                        var clip = {
                            width: calculatedWidth,
                            height: this.trackHeight,
                            color: musicClipCreatedEvent.color,
                            tag: musicClipCreatedEvent.tag,
                            icon: musicClipCreatedEvent.icon
                        };

                        var relatedPartId = musicClipCreatedEvent.partId;

                        for (var i = 0; i < this.parts.length; i++) {
                            var iteratedPart = this.parts[i];
                            if (iteratedPart.id != relatedPartId) {
                                continue;
                            }
                            var retrievedPart = iteratedPart;
                            retrievedPart.clips.push(clip);
                        }

                    },
                    onTempoDefined: function (TempoDefinedEvent) {
                        this.BpmTempo = TempoDefinedEvent.BpmTempo;
                    },
                    BpmTempo: 0,
                    onMeasureDefined: function (MeasureDefinedEvent) {
                        this.DenominatorMeasure = MeasureDefinedEvent.Denominator;
                        this.NumeratorMeasure = MeasureDefinedEvent.Numerator;
                    },
                    DenominatorMeasure: 0,
                    NumeratorMeasure: 0,
                    onZoomFactorChange: function (ZoomFactorChangeEvent) {
                        this.DenominatorZoom = ZoomFactorChangeEvent.Denominator;
                    },
                    DenominatorZoom: 0,
                    onQuantizeGridChange: function (QuantizeGridChangeEvent) {
                        this.DenominatorQuantize = QuantizeGridChangeEvent.Denominator;
                        this.NumeratorQuantize = QuantizeGridChangeEvent.Numerator;
                    },
                    DenominatorQuantize: 0,
                    NumeratorQuantize: 0,
                    onClearComposition: function (ClearCompositionEvent) {
                        this.tracks = [
                            {
                                color: "pink",
                                clips: []
                            },
                            {
                                color: "#dbaddd",
                                clips: []
                            },
                            {
                                color: "pink",
                                clips: []
                            },
                            {
                                color: "#dbaddd",
                                clips: []
                            },
                            {
                                color: "pink",
                                clips: []
                            },
                            {
                                color: "#dbaddd",
                                clips: []
                            }
                        ];
                        this.scrollData =
                            {
                                selectedItem: 0,
                                items: []
                            }
                    },
                    saveButtonVisible: false,
                    onSaveButtonVisibilityConfigured: function (SaveButtonVisibilityConfiguredEvent) {
                        this.saveButtonVisible = SaveButtonVisibilityConfiguredEvent.Visible;
                    },
                    onButtonTextConfigured: function (ButtonTextConfiguredEvent) {
                        if (ButtonTextConfiguredEvent.ButtonPosition == "Left") {
                            this.buttonsData.orangeButtonLeftData.text = ButtonTextConfiguredEvent.ButtonText;
                        } else {
                            this.buttonsData.orangeButtonRightData.text = ButtonTextConfiguredEvent.ButtonText;
                        }
                    },
                    buttonsData: {
                        orangeButtonLeftData: {
                            text: "MUZIEKLIJST",
                            event: {
                                type: "Ikc2019.Events.Navigate.MusicList, Ikc2019, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
                            }
                        },
                        orangeButtonRightData: {
                            text: ""
                        }
                    },
                    compositionData: {
                        compositionName: "",
                        composerName: ""
                    },
                    onMusicSetCreated: function (MusicSetCreatedEvent) {
                        this.parts = [];
                    },
                    loadComposition: function (id) {
                        var deferred = $q.defer();
                        var that = this;
                        storageService.loadComposition(id).then(function (req) {
                            that.processEvents(req.data, deferred);
                        }, function (error) {
                            console.log("error in loadComposition: " + error);
                        });
                        return deferred.promise;
                    },
                    emitEvent: function (event) {
                        console.log("emitted");
                        console.log(event);
                        this.processEvents([event]);
                    },
                    processEvents: function (events, deferred) {
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            var handlerNames = this.eventBindings[event.type];
                            if (handlerNames) {
                                for (var ii = 0; ii < handlerNames.length; ii++) {
                                    var fn = handlerNames[ii];
                                    if (fn == "onCompositionCreated") {
                                        this[fn](event, deferred);
                                    }
                                    else if (this.hasOwnProperty(fn) && typeof (this[fn] == "function")) {
                                        this[fn](event);
                                    }
                                    else {
                                        console.error("function " + fn + " does not exist!!")
                                    }
                                }
                            } else {
                                console.log("no handler mapping found for " + event.Type);
                                console.log(event);
                            }
                        }
                    },
                    eventBindings: {
                        "JsonCompositionFromIkc2009.Events.MusicEnvironment.MusicSetCreated, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onMusicSetCreated"],
                        "JsonCompositionFromIkc2009.Events.Scroll.ScrollItemAdded, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onScrollItemAdded"],
                        "JsonCompositionFromIkc2009.Events.Composition.CompositionCreated, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onCompositionCreated"],
                        "JsonCompositionFromIkc2009.Events.MusicEnvironment.MusicPartCreated, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onMusicPartCreated"],
                        "JsonCompositionFromIkc2009.Events.Config.TrackHeightConfigured, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onTrackHeightConfigured"],
                        "JsonCompositionFromIkc2009.Events.MusicEnvironment.TempoDefined, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onTempoDefined"],
                        "JsonCompositionFromIkc2009.Events.Config.ZoomFactorChange, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onZoomFactorChange"],
                        "JsonCompositionFromIkc2009.Events.Config.QuantizeGridChange, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onQuantizeGridChange"],
                        "JsonCompositionFromIkc2009.Events.MusicEnvironment.MeasureDefined, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onMeasureDefined"],
                        "JsonCompositionFromIkc2009.Events.MusicEnvironment.MusicClipCreated, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onMusicClipCreated"],
                        "JsonCompositionFromIkc2009.Events.Composition.ClearCompositionEvent, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onClearComposition"],
                        "JsonCompositionFromIkc2009.Events.Config.TrackHeightChange, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onTrackHeightChanged"],
                        "JsonCompositionFromIkc2009.Events.Config.SaveButtonVisibilityConfigured, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onSaveButtonVisibilityConfigured"],
                        "JsonCompositionFromIkc2009.Events.Config.ButtonTextConfigured, JsonCompositionFromIkc2009, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onButtonTextConfigured"],
                        "Ikc2019.Events.Navigate.MusicList, Ikc2019, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null": ["onMusicListNavigation"]
                    }
                };
            }]);