(function() {
  'use strict';

  angular
    .module('watsonEntityViewer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
