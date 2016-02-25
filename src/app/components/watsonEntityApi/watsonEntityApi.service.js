(function() {
  'use strict';

  angular
    .module('watsonEntityViewer')
    .factory('watsonEntityApi', watsonEntityApi);

  /** @ngInject */
  function watsonEntityApi($log, $http) {
    var apiHost = 'http://watson-entity-finder.eu-gb.mybluemix.net/api/alchemy';

    var service = {
      apiHost: apiHost,
      getEntities: getEntities
    };

    return service;

    function getEntities(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost)
        .then(getEntitiesComplete)
        .catch(getEntitiesFailed);

      function getEntitiesComplete(response) {
        return response.data;
      }

      function getEntitiesFailed(error) {
        $log.error('XHR Failed for getEntities.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
