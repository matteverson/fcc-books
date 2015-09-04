'use strict';

angular.module('fccBooksApp')
  .service('TradeModel', function (Auth, $http) {
    var uriBase = '/api/trades/';
    var myTrades = [];

    this.getMine = function() {
      return $http.get(uriBase + "mine");
    };

    this.all = function() {
      return $http.get(uriBase);
    }

    this.add = function(book) {
      var trade = {
        book: book._id,
        requester: Auth.getCurrentUser()._id,
        requestee: book.owner,
        approved: false
      };
      return $http.post(uriBase, trade);
    };

    this.approve = function(trade) {
        trade.approved = true;
        return $http.put(uriBase + trade._id, trade);
    };

    this.delete = function(trade) {
      return $http.delete(uriBase + trade._id);
    };

  });
