using Xunit;
using System;
using bayeslife.apiStandardization;

namespace UnitTests
{
    public class APIDateHelperTest
    {
        string datetime_property_utc = "2010-12-30T11:00:00.123Z";
        string datetime_property_zoned  = "2010-12-31T00:00:00.123+13:00";

        
        [Fact]
        public void PropertyToDatetimeTest_UTC()
        {

            ApiDatetimeHelper date_helper = new ApiDatetimeHelper();

            DateTime dt = DateTime.Parse(datetime_property_utc);

            DateTime dt2 = date_helper.propertyToDate(datetime_property_utc);

            Assert.Equal(0,dt2.Hour);
            Assert.Equal(0,dt2.Minute);
            Assert.Equal(0,dt2.Second);

            Assert.Equal(dt, dt2);
        }

         [Fact]
        public void PropertyToDatetimeTest_Zoned()
        {

            ApiDatetimeHelper date_helper = new ApiDatetimeHelper();

            DateTime dt = DateTime.Parse(datetime_property_zoned);

            DateTime dt2 = date_helper.propertyToDate(datetime_property_zoned);

            Assert.Equal(0,dt2.Hour);
            Assert.Equal(0,dt2.Minute);
            Assert.Equal(0,dt2.Second);

            Assert.Equal(dt, dt2);
        }

        

        [Fact]
        public void DateToPropertyTest()
        {
            ApiDatetimeHelper datetime_helper = new ApiDatetimeHelper();
            

            DateTime dt1 = datetime_helper.propertyToDate(datetime_property_utc);
            DateTime dt2 = datetime_helper.propertyToDate(datetime_property_zoned);

            
            Assert.Equal(dt2, dt1);
        }


    }
}
