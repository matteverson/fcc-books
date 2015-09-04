'use strict';

angular.module('fccBooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trades', {
        url: '/trades',
        templateUrl: 'app/trades/trades.html',
        controller: 'TradesCtrl'
      });
  });