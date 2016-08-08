"use strict";
var index_1 = require("../src/index");
var moment = require('moment');
var test_date = "2000-01-01";
var api_date_helper = new index_1.ApiDateHelper();
describe('Date', function () {
    describe('rfc3339', function () {
        it('should return a javascript date in utc time zone', function () {
            var dt = api_date_helper.propertyAsDate('2000-01-01');
            var dt2 = new Date(test_date); //utc
            assert.equal(dt.getTime(), dt2.getTime());
        });
        it('should return a date suitable api propery format', function () {
            var date_property = test_date;
            var dt = new Date(date_property); //utc
            var date_property2 = api_date_helper.dateAsProperty(dt);
            assert.equal(date_property, date_property2);
        });
        it('should return a local date in suitable api propery format', function () {
            var date_property = test_date;
            var dt = moment(date_property).toDate(); //localtime
            var date_property2 = api_date_helper.dateAsProperty(dt);
            assert.equal(date_property, date_property2);
        });
        it('should return a local date in suitable api propery format', function () {
            var date_property = test_date + "T00:00:00.000Z";
            var dt = new Date(test_date);
            var date_property2 = api_date_helper.dateAsISO(dt);
            assert.equal(date_property, date_property2);
        });
    });
});
