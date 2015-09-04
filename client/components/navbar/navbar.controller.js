'use strict';

angular.module('fccBooksApp')
.controller('NavbarCtrl', function ($scope, $location, Auth, $mdUtil, $mdSidenav) {
  $scope.toggleLeft = buildToggler('left');
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

  Auth.isLoggedInAsync(function(result) {
      $scope.isLoggedIn = result;
      $scope.isAdmin = Auth.isAdmin();
      $scope.getCurrentUser = Auth.getCurrentUser();
  });

  $scope.logout = function() {
    Auth.logout();
    $location.path('/login');
  };

  $scope.getTitle = function() {
      switch($location.path()) {
      case '/login':
        return 'Log in';
      case '/signup':
        return 'Register';
      case '/settings':
        return 'Settings';
      case '/mybooks':
        return 'My Books';
      case '/':
        return 'All Books';
      case '/trades':
        return 'Trade Requests';
      default:
        return 'Book Broker';
      };
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };

  $scope.go = function(path) {
    $location.path(path);
  };
});
