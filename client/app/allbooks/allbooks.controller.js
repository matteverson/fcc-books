'use strict';

angular.module('fccBooksApp')
  .controller('AllbooksCtrl', function ($scope, $http, Auth, TradeModel) {
    $scope.books = [];

    var updateTradeDisplay = function() {
      TradeModel.getMine()
      .success(function(trades) {
        $scope.books = $scope.books.map(function(book) {
          trades.forEach(function(trade) {
            if (trade.book._id === book._id) {
              book.cannotTrade = true;
            };
          });
          if (book.owner._id === Auth.getCurrentUser()._id) {
            book.cannotTrade = true;
          };
          return book;
        });
      })
    };

    $http.get('/api/books')
    .success(function(books) {
      $scope.books = books;
      updateTradeDisplay();
    });

    $scope.toggleTrade = function(book) {
      if (book.cannotTrade) {
        return;
      };
      $scope.books = $scope.books.map(function(item) {
        if (item === book) {
          item.showTrade = !item.showTrade;
        }
        else {
            item.showTrade = false;
        };
        return item;
      });
    };

    $scope.trade = function(book) {
      var i = $scope.books.indexOf(book);
      TradeModel.add(book)
      .success(function(trade) {
        $scope.books[i].cannotTrade = true;
        $scope.toggleTrade(book);
      });
    };
  });
