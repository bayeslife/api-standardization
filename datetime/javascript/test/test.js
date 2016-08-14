var api_datetime_helper = require("../index.js");

var moment = require('moment');

var test_datetime_utc = "2010-12-30T11:00:00.123Z";
var test_datetime_zoned = "2010-12-31T00:00:00.123+13:00";

var assert = require('assert');
describe('DateTime', function() {
  describe('rfc3339', function() {
    it('should handle utc time', function() {

      var dt = api_datetime_helper.propertyAsDateTime(test_datetime_utc);
      var dt2 = new Date(test_datetime_utc);//utc

      assert.equal(dt.getTime(),dt2.getTime());
    });
    
    it('should handle offset time', function() {

      var dt = api_datetime_helper.propertyAsDateTime(test_datetime_zoned);
      var dt2 = new Date(test_datetime_zoned);//utc

      assert.equal(dt.getTime(),dt2.getTime());
    });

    it('should utc and zoned equivalence', function() {

      var dt = api_datetime_helper.propertyAsDateTime(test_datetime_utc);
      var dt2 = api_datetime_helper.propertyAsDateTime(test_datetime_zoned);

      assert.equal(dt.getTime(),dt2.getTime());
    });


    it('should return utc formatted property', function() {
      var date_property2 = api_datetime_helper.datetimeAsProperty(test_datetime_zoned);
      assert.equal(test_datetime_utc,date_property2);
    });


    // it('should return a local date in suitable api propery format', function() {
    //   var date_property = test_date
    //   var dt = moment(date_property).toDate();//localtime
    //   var date_property2 = api_date_helper.dateAsProperty(dt);
    //
    //   assert.equal(date_property,date_property2);
    // });
    //
    // it('should return a local date in suitable api propery format', function() {
    //   var date_property = test_date+"T00:00:00.000Z"
    //   var dt = new Date(test_date);
    //   var date_property2 = api_date_helper.dateAsISO(dt);
    //   assert.equal(date_property,date_property2);
    // });

  });
})
