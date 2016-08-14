import moment = require('moment');

export class ApiCurrencyHelper   {

    ApiCurrencyHelper(){
    }

    asCurrency(currency_string: string) : Number {
      return Number(currency_string);
    }

    asProperty(currency_number: Number): string{
      return currency_number.toFixed(2);
    }

}
