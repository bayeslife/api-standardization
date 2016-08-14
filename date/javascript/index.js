#!/usr/bin/env node
var  moment = require('moment')


function propertyAsDate(date_string){
  //This returns date in local time zone
  return moment.utc(date_string).toDate();
}

function dateAsProperty(date){
  //Converts javascript date in UTC into date
  return moment(date).format('YYYY-MM-DD');
}

function dateAsISO(date){
  //Converts javascript date in UTC into date
  return moment(date).toISOString();
}

module.exports = {
  propertyAsDate: propertyAsDate,
  dateAsProperty: dateAsProperty,
  dateAsISO: dateAsISO
}
