'use strict';

angular.module('fccBooksApp')
  .controller('TradesCtrl', function ($scope, TradeModel, Auth) {
    var currentUserId = Auth.getCurrentUser()._id;

    var getTrades = function() {
      TradeModel.getMine()
      .success(function (trades) {
        console.log(trades);
        $scope.pendingTrades = trades.filter(function(trade) {
          return !trade.approved && trade.requestee && trade.requestee._id === currentUserId;
        });

        $scope.yourRequests = trades.filter(function(trade) {
          return !trade.approved && trade.requester && trade.requester._id === currentUserId;
        });

        $scope.approvedTrades = trades.filter(function(trade) {
          return trade.approved && trade.requestee && trade.requestee._id === currentUserId;
        });

        $scope.yourApprovals = trades.filter(function(trade) {
          return trade.approved && trade.requester && trade.requester._id === currentUserId;
        });
      });
    };

    $scope.approve = function(trade) {
      TradeModel.approve(trade)
      .success(function (trade) {
        getTrades();
      });
    };

    $scope.cancel = function(trade) {
      TradeModel.delete(trade)
      .success(function (trade) {
        getTrades();
      });
    };

    getTrades();
  });
