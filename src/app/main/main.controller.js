(function() {
  'use strict';

  angular
    .module('watsonEntityViewer')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, watsonEntityApi) {
    var vm = this;

    vm.awesomeThings = [];
    vm.entities = {};
    vm.classAnimation = '';
    vm.creationDate = 1456420904899;
    vm.search = search;

    activate();

    function activate() {
      getWebDevTec();
      getEntities();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function search() {
      console.log('searching!');
    };

    function getEntities() {
      vm.entities = watsonEntityApi.getEntities();
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
