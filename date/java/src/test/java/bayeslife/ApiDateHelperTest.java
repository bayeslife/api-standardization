package bayeslife;


import org.junit.Assert;
import org.junit.Test;

import javax.swing.text.DateFormatter;
import java.time.LocalDate;
import java.util.Date;

/**
 * Unit test for simple ApiDateHelper.
 */
public class ApiDateHelperTest
{

    String dateProperty = "2000-12-31";

    /**
     */
    @Test
    public void test_propertyAsDate()
    {

        ApiDateHelper apiDateHelper = new ApiDateHelper();
        LocalDate date2 = apiDateHelper.propertyAsDate(dateProperty);

        LocalDate date = LocalDate.parse(dateProperty);

        Assert.assertEquals( date, date2 );
    }

    @Test
    public void test_dateAsProperty()
    {
        LocalDate date = LocalDate.parse(dateProperty);

        ApiDateHelper apiDateHelper = new ApiDateHelper();
        String date2 = apiDateHelper.dateAsProperty(date);

        Assert.assertEquals( dateProperty, date2 );
    }
}
