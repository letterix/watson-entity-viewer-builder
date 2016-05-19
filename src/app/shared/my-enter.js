(function () {


    angular
        .module('watsonEntityViewer')
        .directive('myEnter', myEnter);

        function myEnter() {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.myEnter);
                        });

                        event.preventDefault();
                    }
                });
            }
        }
})();
