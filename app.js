var moment = require('moment');
var lodash = require('lodash');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

let d1 = moment("2020-01-01");
let d2 = moment("2020-14-01");

console.log(d1.isValid());
console.log(d2.isValid());

console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());

console.log(moment().subtract(7, 'days').calendar());
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());

var d3 = moment([2014, 11, 11]);
var d4 = moment([2015, 09, 11]);

console.log(d4.diff(d3, 'days'));

var d5 = moment([2014, 11, 27]);
var d6 = moment([2015, 09, 16]);

console.log(d6.diff(d5, 'days'));

var d7 = moment([2020, 01, 01]);
var d8 = moment([2018, 01, 01]);

console.log(d7.diff(d8));

var d9 = moment([2010, 01, 01]);
var d10 = moment([2018, 01, 01]);

console.log(d9.diff(d10));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

console.log(lodash.chunk([1, 34, 56, 7, 34, 12, 5, 67, 44, 67, 77, 89, 100, 23], [size = 3]));
console.log(lodash.concat([1, 2, 3, 4, 5], 6, 7, 8, 9, 10));
console.log(lodash.difference([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8]));
console.log(lodash.drop([1, 2, 3, 4, 5, 6], 3));
console.log(lodash.flatten([1, 2, 3, [4], [5]]));

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lodash.each(num, function(elm) {
    console.log(`${elm + 2}`);
})
console.log(lodash.find(num, function(elm) {
    return elm % 2 === 0;
}, 4));
console.log(lodash.includes(num, 34));
console.log(lodash.sample(num));
console.log(lodash.size(num));