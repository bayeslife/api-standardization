using System;

namespace bayeslife.apiStandardization
{
/*  */
public class  ApiDateHelper  {

      public DateTime propertyToDate(string date){
            DateTime dt = DateTime.Parse(date);
            return dt;
            
      }
      
       public String dateToProperty(DateTime date){
             return date.ToString("yyyy-MM-dd");
            
      }

}
}
