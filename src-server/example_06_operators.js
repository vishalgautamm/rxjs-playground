import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Do, finally, start with, filter

// DO - Creates side effects
Rx.Observable.range(1, 10)
    .do(a => console.log(`${a} times 3 equals = `))
    .map( x => x * 3)
    .subscribe(createSubscriber("Simple:"))

// Finally - doesn't return a value. only runs when the sequence completes
Rx.Observable.range(1, 10)
    .finally(x => console.log(`From finally`))
    .map(x => x + 5)
    .subscribe(createSubscriber("Finally: "))

// filter - predicate fn
Rx.Observable.range(1, 10)
    .map(x => x * 3)
    .filter(x => x > 20)
    .subscribe(createSubscriber("filter"))

// StartWith - Merges in with first value
Rx.Observable.interval(1000)
    .startWith(-1)
    .subscribe(createSubscriber("interval"))
