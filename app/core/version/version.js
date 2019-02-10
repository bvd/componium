'use strict';

angular.module('componiumApp.version', [
  'componiumApp.version.interpolate-filter',
  'componiumApp.version.version-directive'
])

.value('version', '0.1');
