 (function() {
    'use strict';

    angular
        .module('watsonEntityViewer')
        .factory('FileResource', FileResource);

    function FileResource($resource) {

        return function(path, params, methods) {
            var defaults = {
                create: {
                    method: 'POST',
                    transformRequest: formDataObject,
                    headers: {
                        'Content-Type': undefined,
                        enctype:'multipart/form-data'
                    }
                }
            };

            function formDataObject (data) {
                var fd = new FormData();
                angular.forEach(data[0], function(value, key) {
                    fd.append(key, value);
                });

                return fd;
            }

            methods = angular.extend(defaults, methods);

            var resource = $resource('//localhost:6003/api' + path, params, methods);
            resource.prototype.$save = function() {
                console.log(this)
                return this.$create();
            };

            return resource;
        };
    }

 })();
