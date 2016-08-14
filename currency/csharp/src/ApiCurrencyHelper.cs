using System;

namespace bayeslife.apiStandardization
{
/*  */
public class  ApiCurrencyHelper  {

      public decimal asCurrency(string currency){
            decimal dt = Decimal.Parse(currency);
            return dt;
            
      }
      
       public String asProperty(decimal currency){
             return currency.ToString("F2");            
      }

}
}
