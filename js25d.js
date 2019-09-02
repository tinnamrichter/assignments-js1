'use strict';

console.log('Truth Table Disjunction');
console.log('var1\tvar2\tvar1 || var2');

var var1 = true;
var var2 = true;
console.log(var1 + '\t' + var2 + '\t' + (var1||var2)); // true, true, true

var var1 = true;
var var2 = false;
console.log(var1 + '\t' + var2 + '\t' + (var1||var2)); // true, false, true

var var1 = false;
var var2 = true;
console.log(var1 + '\t' + var2 + '\t' + (var1||var2)); // false, true, true

var var1 = false;
var var2 = false;
console.log(var1 + '\t' + var2 + '\t' + (var1||var2)); // false, false, false