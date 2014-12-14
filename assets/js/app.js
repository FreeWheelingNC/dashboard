'use strict';
angular.module('freewheeling',['ngRoute','leaflet-directive'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'RoutesCtrl'
      });
  }]);