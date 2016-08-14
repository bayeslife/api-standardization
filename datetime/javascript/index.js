#!/usr/bin/env node
var moment = require('moment')

function propertyAsDateTime(datetime_string){
  return moment(datetime_string).toDate();
}

function datetimeAsProperty(date){
  return datetimeAsISO(date);
}

function datetimeAsISO(date){
  //Converts javascript date in UTC into date
  return moment(date).toISOString();
}

module.exports = {
  propertyAsDateTime: propertyAsDateTime,
  datetimeAsProperty: datetimeAsProperty,
  datetimeAsISO: datetimeAsISO
}
