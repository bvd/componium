
angular.module('componiumApp')
	.factory('storageService', ['$q', '$timeout', '$http', storageService]);

function storageService($q, $timeout, $http) {

	return {
		loadComposition: loadComposition,
		loadScroll: loadScroll,
		loadEnvironment: loadEnvironment,
		loadConfig: loadConfig,
		sendToQueue: sendToQueue,
		connection: null
	};
	function loadComposition(id) {
		return $http.get('https://ikc2.azurewebsites.net/api/composition/' + id);
	}
	function loadScroll(id) {
		return $http.get('https://ikc2.azurewebsites.net/api/scroll/' + id);
	}
	function loadEnvironment(id) {
		return $http.get('https://ikc2.azurewebsites.net/api/environment/' + id);
	}
	function loadConfig(id) {
		return $http.get('https://ikc2.azurewebsites.net/api/conf/' + id);
	}
	function sendToQueue(m) {
		Offline.options = { deDupBody: true };
		Offline.check();
		var queueUri = 'https://ikcclients.queue.core.windows.net';
		var sas = '?sv=2019-02-02&ss=q&srt=o&sp=a&se=2099-11-07T07:23:54Z&st=2019-11-06T23:23:54Z&spr=https,http&sig=2xHSWrFZaplJWCjV9LpP8nnQIXFuVyNLimHafUTPepA%3D';
		var queueService = AzureStorage.Queue.createQueueServiceWithSas(queueUri, sas);
		var encoder = new AzureStorage.Queue.QueueMessageEncoder.TextBase64QueueMessageEncoder();
		queueService.createMessage('from', encoder.encode(JSON.stringify(m)), function (error, results, response) {
			if (error) {
				console.error(error);
			} else {
				// Create message successfully
			}
		});
	}
}