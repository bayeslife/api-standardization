import { ApiDateTimeHelper } from "../src/index";

import { expect,assert } from 'chai';

import moment = require('moment');

var test_datetime_utc = "2010-12-30T11:00:00.123Z";
var test_datetime_zoned = "2010-12-31T00:00:00.123+13:00";

let api_datetime_helper = new ApiDateTimeHelper();

describe('DateTime', function() {
  describe('rfc3339', function() {
    it('should handle utc time', function() {

      var dt = api_datetime_helper.propertyAsDatetime(test_datetime_utc);
      var dt2 = new Date(test_datetime_utc);//utc

      assert.equal(dt.getTime(),dt2.getTime());
    });

    it('should handle offset time', function() {

      var dt = api_datetime_helper.propertyAsDatetime(test_datetime_zoned);
      var dt2 = new Date(test_datetime_zoned);//utc

      assert.equal(dt.getTime(),dt2.getTime());
    });

    it('should utc and zoned be equivalent', function() {

      var dt = api_datetime_helper.propertyAsDatetime(test_datetime_utc);
      var dt2 = api_datetime_helper.propertyAsDatetime(test_datetime_zoned);

      assert.equal(dt.getTime(),dt2.getTime());
    });


  });
})
