using Xunit;
using System;
using bayeslife.apiStandardization;


namespace UnitTests
{
    
    public class APICurrencyHelperTest
    {
        string currency_property =  "100.00";

        
        [Fact]
        public void AsCurrencyTest()
        {
            
            ApiCurrencyHelper currency_helper = new ApiCurrencyHelper();
            
            Decimal d = Decimal.Parse(currency_property); 
            
            Decimal d2 = currency_helper.asCurrency(currency_property);
                               
            Assert.Equal(d, d2);            
        }

        [Fact]
        public void AsPropertyTest()
        {        
            ApiCurrencyHelper currency_helper = new ApiCurrencyHelper();
            
            Decimal d2 = currency_helper.asCurrency(currency_property);
            String dt = currency_helper.asProperty(d2);
                               
            Assert.Equal(currency_property, dt);
        }
   
   
    }
}