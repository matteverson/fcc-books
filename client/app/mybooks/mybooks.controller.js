'use strict';

angular.module('fccBooksApp')
  .controller('MybooksCtrl', function ($scope, $http, $mdSidenav, $mdUtil, Auth) {
    $scope.toggleRight = buildToggler('right');

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
    $scope.getCurrentUser = Auth.getCurrentUser;

    var getMyBooks = function() {
      $http.post('/api/books/mine', { user: Auth.getCurrentUser()._id })
      .success(function(books) {
        $scope.books = books;
      });
    };

    $scope.search = function(bookName) {
      $http.get('/api/books/search/' + window.encodeURIComponent(bookName))
      .success(function(books) {
        $scope.searchResults = books;
      });
    };

    $scope.add = function(book) {
      $http.post('/api/books/', { title: book.title, thumbnail: book.thumbnail, owner: Auth.getCurrentUser()._id });
      $mdSidenav('right').close();
      getMyBooks();
    };

    getMyBooks();
  });
