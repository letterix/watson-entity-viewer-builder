(function() {
    'use strict';

    angular
        .module('watsonEntityViewer')
        .factory('Analyzer', Analyzer);

    function Analyzer(Resource) {
    	return new Resource('/search/:search', { search: '@search' });
    }

})();
