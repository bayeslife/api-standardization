package bayeslife;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

/**
 *
 */
public class ApiDateHelper
{

    SimpleDateFormat format = new SimpleDateFormat();

    public LocalDate propertyAsDate(String date_property){
        //This returns date in local time zone
        LocalDate date = LocalDate.parse(date_property);
        return date;
    }

    public String dateAsProperty(LocalDate date){
        //Converts javascript date in UTC into date
        return date.toString();
        //return format.format(date);
    }

    public String dateAsProperty(Date date){
        //Converts javascript date in UTC into date
        return format.format(date);
    }

    public String dateAsISO(Date date) {
        return format.format(date);
    }
}
