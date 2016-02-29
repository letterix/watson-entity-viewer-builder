(function() {
  'use strict';

  angular
    .module('watsonEntityViewer')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, Search) {
    var vm = this;
    window.vm = vm;

    vm.awesomeThings = [];
    vm.entities = [];
    vm.classAnimation = '';
    vm.creationDate = 1456420904899;
    vm.search = search;
    vm.searchString = '';

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function search(searchString) {
      Search.query({search: searchString})
        .$promise.then(function(result) {
          vm.entities = result;
        });
    };

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
