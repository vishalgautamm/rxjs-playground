import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

/*
REDUCE and SCAN
What if you have this Observable that produce these individual items , what if you want to collect
all these items and reduce into a single value
*/

// Reduce
// Rx.Observable.range(1, 10) // returns 55, sum of 1..10
//     .merge(Rx.Observable.never())
//     .reduce((acc, value) => acc + value)
//     .subscribe(createSubscriber("Reduce: "));

// If we we merged Rx.Observable.never, nothing happens. Because the reduce never finishes
// This is slightly problomatic because often times with our streams they are HOT
// adn they will continuously pass in values. What if we wanted to process every single value
// as it came in and emit the result, thats where scan comes in
// Rx.Observable.range(1, 10) // returns nothing
//     .merge(Rx.Observable.never())
//     .reduce((acc, value) => acc + value)
//     .subscribe(createSubscriber("Reduce: "));

// Scan - it is literally like reduce. Even though it never completes, it still produces
// value every single time a value came in
// Rx.Observable.range(1, 10) // returns 1,3,6,10,15 ....., 55 but never completes 
//     .merge(Rx.Observable.never()) // with never, we never get the complete 
//     .scan((acc, value) => acc + value)
//     .subscribe(createSubscriber("Reduce and Scan: "));

// What if we wanted the last value and the current value
/*
We get an array with the first value and the last value
.scan(([last], current) => [current, last], []) is equivalent to

function scanLast(acc, value) {
    const last = acc[0]
    return [value, last]
}

we are using ES6 Destructuring.
WE return current item as the first item in the array, and last item is the second
We also pass an empty array, because if we try to destructure an undefined, we get an error

Scan Usecases: if you continously need to agregate values and process them
scan is kind of the reactive version of reduce 
- Use scan if you need intermediate results or your Observable never completes
*/
Rx.Observable.range(1, 10)
    .map(x => x * 2)
    .scan(([last], current) => [current, last], [])
    .subscribe(createSubscriber("Reduce: "));


