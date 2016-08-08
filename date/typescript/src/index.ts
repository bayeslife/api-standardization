import moment = require('moment');

export class ApiDateHelper   {

    ApiDateHelper(){
    }

    propertyAsDate(date_string: string) : Date {
      //This returns date in local time zone
      return moment.utc(date_string).toDate();
    }

    dateAsProperty(date: Date): string{
      //Converts javascript date in UTC into date
      return moment(date).format('YYYY-MM-DD');
    }

    dateAsISO(date: Date): string {
      //Converts javascript date in UTC into date
      return moment(date).toISOString();
    }

}
