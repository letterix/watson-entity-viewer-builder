(function() {
    'use strict';

    angular
        .module('watsonEntityViewer')
        .factory('Search', Search);

    function Search(Resource) {
        return new Resource('/search/:search', { search: '@search' });
    }

})();
