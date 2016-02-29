 (function() {
    'use strict';

    angular
        .module('watsonEntityViewer')
        .factory('Resource', Resource);

    function Resource($resource) {

        return function(path, params, methods) {
            var defaults = {
                update: { method: 'PUT', isArray: false, withCredentials: true },
                create: { method: 'POST', withCredentials: true}
            };

            methods = angular.extend(defaults, methods);

            var resource = $resource('//localhost:6001/api' + path, params, methods);
            resource.prototype.$save = function() {
                if(!this._id) {
                    return this.$create();
                }

                return this.$update();
            };

            return resource;
        };
    }

 })();
