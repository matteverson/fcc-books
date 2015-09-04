'use strict';

describe('Controller: TradesCtrl', function () {

  // load the controller's module
  beforeEach(module('fccBooksApp'));

  var TradesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TradesCtrl = $controller('TradesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
