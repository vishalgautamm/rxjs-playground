'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // promise are not lazy
// const promise = new Promise((resolve, reject) => {
//     console.log("IM PROMISE");
//     resolve("Hey");
// })

// // PART 1 --

// // Create an Observable
// const sampleObservable = new Rx.Observable(observer => {
//     console.log("generating Observable");
//     setTimeout(() => {
//         observer.next("An item");
//         setTimeout(() => {
//             observer.next("Another item")
//             observer.complete()
//         }, 1000)
//     }, 1000);
// });

// // Observables are lazy so they dont run like Promises do
// // they do not run a generator function, until they have a subscription

// // Error Observable
// const error = new Rx.Observable(observer => {
//     observer.error(new Error("WHOA!"));
// });


// // Creating an subsctiption - it is the thing that does something to the data
// // it is the thing that causes side effects
// // First method: Subscribe takes three functions.
// error.subscribe(
//     item => console.log(`one.next: ${item}`),    // 1. next function. Maps to whatever.next is 
//     error => console.log(`one.error: ${error.stack}`), // 2. second takes the error callback
//     () => console.log(`one.complete`));          // 3. third is the on complete callback

// // second method: Takes in an object, with all three functions defined within that object
// setTimeout(() => {
//     sampleObservable.subscribe({
//         next: item => console.log(`two.next: ${item}`),
//         error: error => console.error(`two.error: ${error}`),
//         complete: () => console.log(`two.complete`)
//     })
// }, 3000);

// // Each Time we subscribe to the Observable, it re runs the generator function 
// // This behaviour is incredibly important when working with reactive programming 
// // This is how we can do things like requery/re-try a web api or retry a web api if it fails 
// // because by re subscribing to that web api, that api call will happen again
// // There are ways to make sure that observable wont be generated more than once ( Thats a discussion of hot vs cold observables)

// // Summary: An observable is simply an generator function, that accepts an observer and invokes the next or complete methods on it

// ------------------------


// PART 2: // Second way to create an observable, by passing objects
function createInterval(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log('Generating ' + index);
            observer.next(index++);
        }, time);

        return function () {
            return clearInterval(interval);
        }; // Gets invoked when we invoke unsubscribe method. fully unsubscribes from the Observable
    });
}

// How operator is implemented, behind the scenes
function take$(sourceObservable, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        var subscription = sourceObservable.subscribe({
            next: function next(item) {
                observer.next(item);
                if (++count >= amount) observer.complete();
            },
            error: function error(_error) {
                observer.error(_error);
            },
            complete: function complete() {
                observer.complete();
            }
        });

        return function () {
            return subscription.unsubscribe();
        };
    });
}
var everySecond = createInterval(1000);
var firstFiveSeconds = take$(everySecond, 4);
var subscripton = firstFiveSeconds.subscribe((0, _util.createSubscriber)('one'));