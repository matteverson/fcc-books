'use strict';

angular.module('fccBooksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allbooks', {
        url: '/',
        templateUrl: 'app/allbooks/allbooks.html',
        controller: 'AllbooksCtrl'
      });
  });
