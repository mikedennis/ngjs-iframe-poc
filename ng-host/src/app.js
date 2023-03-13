import angular from 'angular';

angular.module('ng-host', [])
  .directive('demo', () => ({
    templateUrl: 'demo.html'
  }));
