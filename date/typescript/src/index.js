"use strict";
var moment = require('moment');
var ApiDateHelper = (function () {
    function ApiDateHelper() {
    }
    ApiDateHelper.prototype.ApiDateHelper = function () {
    };
    ApiDateHelper.prototype.propertyAsDate = function (date_string) {
        //This returns date in local time zone
        return moment.utc(date_string).toDate();
    };
    ApiDateHelper.prototype.dateAsProperty = function (date) {
        //Converts javascript date in UTC into date
        return moment(date).format('YYYY-MM-DD');
    };
    ApiDateHelper.prototype.dateAsISO = function (date) {
        //Converts javascript date in UTC into date
        return moment(date).toISOString();
    };
    return ApiDateHelper;
}());
exports.ApiDateHelper = ApiDateHelper;
