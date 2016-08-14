package bayeslife;


import org.junit.Assert;
import org.junit.Test;

import java.math.BigDecimal;

/**
 * Unit test for simple ApiCurrencyHelper.
 */
public class ApiCurrencyHelperTest
{

    String property = "100.00";
    String property2 = "100";
    String property3 = "100.1";
    String property3_expected = "100.10";
    String property4 = "123456789.99";

    String negative_sample2 = "123456789.999";

    /**
     */
    @Test
    public void test_propertyAsBigDecimal_0DecimalPlaces()
    {

        ApiCurrencyHelper apiCurrencyHelper = new ApiCurrencyHelper();
        BigDecimal currency = apiCurrencyHelper.propertyAsBigDecimal(property2);

        BigDecimal expected = new BigDecimal(property);

        Assert.assertEquals( expected.intValue(), currency.intValue() );
    }

    @Test
    public void test_bigdecimalAsProperty()
    {
        BigDecimal  currency = new BigDecimal(property2);


        ApiCurrencyHelper apiCurrencyHelper = new ApiCurrencyHelper();
        String date2 = apiCurrencyHelper.asProperty(currency);

        Assert.assertEquals( property, date2 );
    }


    @Test
    public void test_bigdecimalAsProperty_1decimal()
    {
        BigDecimal  currency = new BigDecimal(property3);

        ApiCurrencyHelper apiCurrencyHelper = new ApiCurrencyHelper();
        String value = apiCurrencyHelper.asProperty(currency);

        Assert.assertEquals( property3_expected, value );
    }


    @Test
    public void test_bigdecimalAsProperty_3decimal()
    {
        try {
            ApiCurrencyHelper apiCurrencyHelper = new ApiCurrencyHelper();
            apiCurrencyHelper.propertyAsBigDecimal(negative_sample2);
            Assert.fail();
        }catch(Exception ex){
        }
    }

}
