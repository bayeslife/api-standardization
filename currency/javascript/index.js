#!/usr/bin/env node

function asCurrency(currency_string){
  return Number(currency_string);
}

function asProperty(currency_number){
  return currency_number.toFixed(2);
}


module.exports = {
  asCurrency: asCurrency,
  asProperty: asProperty
}
