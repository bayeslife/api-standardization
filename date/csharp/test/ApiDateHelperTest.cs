using Xunit;
using System;
using bayeslife.apiStandardization;


namespace UnitTests
{
    
    public class APIDateHelperTest
    {
        string date_property = "2010-12-25";
        
        [Fact]
        public void PropertyToDateTest()
        {
            
            ApiDateHelper date_helper = new ApiDateHelper();
            
            DateTime dt = DateTime.Parse(date_property); 
            
            DateTime dt2 = date_helper.propertyToDate(date_property);
            
            
            Assert.Equal(0,dt2.Hour);
            Assert.Equal(0,dt2.Minute);
            Assert.Equal(0,dt2.Second);   
            
            Assert.Equal(dt, dt2);
        }

        [Fact]
        public void DateToPropertyTest()
        {        
            ApiDateHelper date_helper = new ApiDateHelper();
            
            DateTime datetime = DateTime.Parse(date_property);

            String dt = date_helper.dateToProperty(datetime);
                               
            Assert.Equal(date_property, dt);
        }
   
   
    }
}