"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Interval function
_Rx2.default.Observable.interval(500).take(5).subscribe((0, _util.createSubscriber)("Interval"));

// timer creates a setTimeout, and setTimeout keeps the process alive
_Rx2.default.Observable.timer(1000, 500).take(5).subscribe((0, _util.createSubscriber)("Timer"));

// of - takes multiple args, simply prints out the items passed and prints complete 
_Rx2.default.Observable.of(["Hello world", 42, "wow "]).subscribe((0, _util.createSubscriber)("of"));

// From - takes a single arg array, and flattens it out
_Rx2.default.Observable.from("hello world").subscribe((0, _util.createSubscriber)("of"));

// from also accepts generator functions 
// Rx.Observable.from(generate())
//     .subscribe(createSubscriber("of"))

// function* generate() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield "hey";
// }

// Example of using from and map and filter
// var arr = [1,2,3,4,5]
// Rx.Observable.from(arr)
//     .map(x => x * 5)
//     .filter(x => x > 10)
//     .subscribe(createSubscriber("Multiple5"))

// * From is a great library to convert an array into stream of items so that
// you can perform calculations on them

// Throw Observable always throw an error
_Rx2.default.Observable.throw(new Error("Argggg")).subscribe((0, _util.createSubscriber)("err"));

// Empty Observable - produces no items. just completes the observable
_Rx2.default.Observable.empty().subscribe((0, _util.createSubscriber)("Empty"));

// Defer

// defer creates an Observable and invoke the function passed everytime it is subscribed to
// returns Obsservable of side effect
var sideEffect = 0;
var defer = _Rx2.default.Observable.defer(function () {
    sideEffect++;
    return _Rx2.default.Observable.of(sideEffect);
});

// Never - produces no items and NEVER completes
_Rx2.default.Observable.never().subscribe((0, _util.createSubscriber)("Never"));

// Range - takes start number and a total count and prints the range
_Rx2.default.Observable.range(10, 5).subscribe((0, _util.createSubscriber)("Range"));