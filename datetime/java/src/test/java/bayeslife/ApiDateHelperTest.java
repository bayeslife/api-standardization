package bayeslife;


import org.junit.Assert;
import org.junit.Test;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZonedDateTime;
import java.util.Date;

/**
 * Unit test for simple ApiDateTimeHelper.
 */
public class ApiDateHelperTest
{

    String datetimeUTCProperty = "2010-12-30T11:00:00.123Z";
    String datetimeOffsetProperty = "2010-12-31T00:00:00.123+13:00";


    @Test
    public void test_propertyOffsetAsDate()
    {
        ApiDateTimeHelper apiDateTimeHelper = new ApiDateTimeHelper();
        Date date2 = apiDateTimeHelper.propertyAsDateTime(datetimeOffsetProperty);

        Date date = Date.from(OffsetDateTime.parse(datetimeOffsetProperty).toInstant());

        Assert.assertEquals( date, date2 );
    }

    @Test
    public void test_propertyUTCAsDate()
    {
        ApiDateTimeHelper apiDateTimeHelper = new ApiDateTimeHelper();
        Date date2 = apiDateTimeHelper.propertyAsDateTime(datetimeUTCProperty);

        Date date = Date.from(OffsetDateTime.parse(datetimeUTCProperty).toInstant());



        Assert.assertEquals( date, date2 );
    }

    @Test
    public void test_propertAsDate_UTC_and_Zoned_Equality()
    {
        ApiDateTimeHelper apiDateTimeHelper = new ApiDateTimeHelper();
        Date date2 = apiDateTimeHelper.propertyAsDateTime(datetimeUTCProperty);

        Date date = apiDateTimeHelper.propertyAsDateTime(datetimeOffsetProperty);


        Assert.assertEquals( date, date2 );
    }

    @Test
    public void test_dateAsProperty()
    {
        Date date = Date.from(OffsetDateTime.parse(datetimeUTCProperty).toInstant());

        ApiDateTimeHelper apiDateTimeHelper = new ApiDateTimeHelper();
        String date2 = apiDateTimeHelper.dateTimeAsProperty(date);

        Assert.assertEquals(datetimeUTCProperty, date2 );
    }
}
