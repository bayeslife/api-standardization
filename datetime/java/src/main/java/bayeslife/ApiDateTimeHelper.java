package bayeslife;

import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Date;

/**
 *
 */
public class ApiDateTimeHelper
{

    SimpleDateFormat format = new SimpleDateFormat();

    DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE;

    public Date propertyAsDateTime(String date_property){
        //This returns date in local time zone
        Date date = Date.from(OffsetDateTime.parse(date_property).toInstant());
        return date;
    }

    public String dateTimeAsProperty(Date date){
        Instant i = Instant.ofEpochMilli(date.getTime());
        return i.toString();
    }


    public String dateAsISO(Date date) {
        return dateTimeAsProperty(date);
    }
}
