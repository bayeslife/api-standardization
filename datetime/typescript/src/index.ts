import moment = require('moment');

export class ApiDateTimeHelper   {

    ApiDateTimeHelper(){
    }

    propertyAsDatetime(date_string: string) : Date {
      //This returns date in local time zone
      return moment.utc(date_string).toDate();
    }

    datetimeAsProperty(date: Date): string{
      return this.datetimeAsISO(date);
    }

    datetimeAsISO(date: Date): string {
      //Converts javascript date in UTC into date
      return moment(date).toISOString();
    }

}
