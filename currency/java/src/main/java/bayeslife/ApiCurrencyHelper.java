package bayeslife;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Locale;

/**
 *
 */
public class ApiCurrencyHelper
{

    public BigDecimal propertyAsBigDecimal(String property){
        try {
            return new BigDecimal(property).setScale(2);
        }catch(java.lang.ArithmeticException l){
            throw new RuntimeException("Currency value ["+property+"] is not 0,1 or 2 decimal places", l);
        }
    }

    public String asProperty(BigDecimal currency){
        //Converts javascript date in UTC into date
        return currency.setScale(2).toString();
        //return format.format(date);
    }


}
