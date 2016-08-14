var api_currency_helper = require("../index.js");

var test_currency = "100.00";
var test_currency_nodecimal = "100";

var assert = require('assert');
describe('Currency', function() {

    it('should return a javascript number for the currency string', function() {

      var dt = api_currency_helper.asCurrency(test_currency);
      var dt2 = Number(test_currency);

      assert.equal(dt,dt2);
    });

    it('should return a javascript number for the currency string with no decimal', function() {

      var dt = api_currency_helper.asCurrency(test_currency_nodecimal);
      var dt2 = Number(test_currency);

      assert.equal(dt,dt2);
    });

    it('should return a propery formatted as a currency with 2 decimal places', function() {

      var c = api_currency_helper.asCurrency(test_currency_nodecimal);
      var currency_property = api_currency_helper.asProperty(c);

      assert.equal(test_currency,currency_property);
    });

})
