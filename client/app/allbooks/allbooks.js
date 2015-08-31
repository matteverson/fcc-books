'use strict';

angular.module('fccBooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allbooks', {
        url: '/allbooks',
        templateUrl: 'app/allbooks/allbooks.html',
        controller: 'AllbooksCtrl'
      });
  });