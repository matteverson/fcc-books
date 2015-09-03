'use strict';

angular.module('fccBooksApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};
    $scope.user = Auth.getCurrentUser();

    $scope.changePassword = function(form) {
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};

    $scope.updateProfile = function(form) {
      if(form.$valid) {
        Auth.updateProfile($scope.user.name, $scope.user.city, $scope.user.state, $scope.user.email)
        .then(function() {
          $scope.message = "Profile successfully updated.";
        })
      }
    }
  });
