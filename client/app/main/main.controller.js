'use strict';

angular.module('fccBooksApp')
  .controller('MainCtrl', function ($scope, $http, $mdSidenav, $mdUtil) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                // animation is done
              });
          },200);
      return debounceFn;
    }

    $scope.books = [];

    $http.get('/api/books/search/javascript')
    .success(function(books) {
      console.log(books);
      $scope.books = books;
    });
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          // closing left is done
        });
    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          // closing right is done
        });
    };
  });
