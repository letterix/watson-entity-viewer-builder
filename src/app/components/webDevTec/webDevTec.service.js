(function() {
  'use strict';

  angular
      .module('watsonEntityViewer')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'name': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'entity.png'
      },
      {
        'name': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'entity.png'
      },
      {
        'name': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'entity.png'
      },
      {
        'name': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'name': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'name': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'name': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
      {
        'name': 'Less',
        'url': 'http://lesscss.org/',
        'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
        'logo': 'less.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
