'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Error Handling: Catch and Retry
// Rx.Observable.concat(
//     Rx.Observable.of(42),
//     Rx.Observable.throw(new Error("Yucky")),
//     Rx.Observable.of(10))
//     .subscribe(createSubscriber("Concat"));

// Observable that does a web request: Example

getAPI().retry(5).catch(function (error) {
    return _Rx2.default.Observable.of(error);
}) // error handling in RxJS
.do(function () {
    return console.log("THING");
}).subscribe((0, _util.createSubscriber)("getAPI"));

function getAPI() {
    return new _Rx2.default.Observable(function (observer) {
        console.log("getting api's");
        setTimeout(function () {
            observer.error(new Error());
        }, 1000);
    });
}

// When the error happens, we immediately unsubscribe and the source that we started with
// also gets unsubscribed from

// Retry doesnt work in Promise resolve and reject's state gets cached
// Where as in Observable, if we re-subscribe to an observer, an 
// the Observer generator function gets greated, so thats a very important difference
// between promises and observables if we are combining the two