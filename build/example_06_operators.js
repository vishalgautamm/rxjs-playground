"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Do, finally, start with, filter

// DO - Creates side effects
_Rx2.default.Observable.range(1, 10).do(function (a) {
    return console.log(a + " times 3 equals = ");
}).map(function (x) {
    return x * 3;
}).subscribe((0, _util.createSubscriber)("Simple:"));

// Finally - doesn't return a value. only runs when the sequence completes
_Rx2.default.Observable.range(1, 10).finally(function (x) {
    return console.log("From finally");
}).map(function (x) {
    return x + 5;
}).subscribe((0, _util.createSubscriber)("Finally: "));

// filter - predicate fn
_Rx2.default.Observable.range(1, 10).map(function (x) {
    return x * 3;
}).filter(function (x) {
    return x > 20;
}).subscribe((0, _util.createSubscriber)("filter"));

// StartWith - Merges in with first value
_Rx2.default.Observable.interval(1000).startWith(-1).subscribe((0, _util.createSubscriber)("interval"));