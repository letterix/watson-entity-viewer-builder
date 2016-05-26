(function() {
    'use strict';

    angular
        .module('watsonEntityViewer')
        .factory('Analyzer', Analyzer);

    function Analyzer(FileResource) {
        return new FileResource('/ci/annotateRFA/',{});
    }

})();
