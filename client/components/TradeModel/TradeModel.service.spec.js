'use strict';

describe('Service: TradeModel', function () {

  // load the service's module
  beforeEach(module('fccBooksApp'));

  // instantiate service
  var TradeModel;
  beforeEach(inject(function (_TradeModel_) {
    TradeModel = _TradeModel_;
  }));

  it('should do something', function () {
    expect(!!TradeModel).toBe(true);
  });

});
