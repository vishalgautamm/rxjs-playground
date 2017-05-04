import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Interval function
Rx.Observable.interval(500)
    .take(5)
    .subscribe(createSubscriber("Interval"))

// timer creates a setTimeout, and setTimeout keeps the process alive
Rx.Observable.timer(1000, 500)
    .take(5)
    .subscribe(createSubscriber("Timer"))

// of - takes multiple args, simply prints out the items passed and prints complete 
Rx.Observable.of(["Hello world", 42, "wow "])
    .subscribe(createSubscriber("of"))

// From - takes a single arg array, and flattens it out
Rx.Observable.from("hello world")
    .subscribe(createSubscriber("of"))

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
Rx.Observable.throw(new Error("Argggg"))
    .subscribe(createSubscriber("err"))

// Empty Observable - produces no items. just completes the observable
Rx.Observable.empty()
    .subscribe(createSubscriber("Empty"))

// Defer

// defer creates an Observable and invoke the function passed everytime it is subscribed to
// returns Obsservable of side effect
let sideEffect = 0
const defer = Rx.Observable.defer(() => {
    sideEffect++
    return Rx.Observable.of(sideEffect);
})

// Never - produces no items and NEVER completes
Rx.Observable.never()
    .subscribe(createSubscriber("Never"))

// Range - takes start number and a total count and prints the range
Rx.Observable.range(10, 5)
    .subscribe(createSubscriber("Range"))

