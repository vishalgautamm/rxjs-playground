import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// First Last Single Skip Take

const simple = new Rx.Observable(observer => {
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
    observer.complete();
})

// // First - gets the first item then completes. kind of safe guards rest of the item 
// simple.first()
//     .subscribe(createSubscriber("first"))

// // Last
// simple.last()
//     .subscribe(createSubscriber("last"))

// // IF we take off all of our next, we wil get an Error

// // Single - returns only returns the element if the Observable emits ONLY one item,
// // otherwise it will return the following error 'sequence contains mroe than one element""
// simple.single()
//     .subscribe(createSubscriber("single"))

// // Takes x amount of items and then completes
// // BTW subscribe is a cold observable
// simple.take(2)
//     .subscribe(createSubscriber("take"))

// // Skip // skips the first n elements 
// simple.skip(2)
//     .subscribe(createSubscriber("Skip"))

// // Take and skip wont freak out if we pass no elements
// // ONly first, last and single freaks out like so

// /*
// first.error EmptyError: no elements in sequence
// last.error EmptyError: no elements in sequence
// single.error EmptyError: no elements in sequence
// take.complete
// Skip.complete
// */

// simple.skip(1).take(1)
//     .subscribe(createSubscriber("skip/take"))

// skip While - takes predicate and skips the items in which the predicate returns true
// Rx.Observable.interval(500)
//     .skipWhile(i => i < 4).take(10)
//     .subscribe(createSubscriber("Skipwhile"))

//Take while 
// Rx.Observable.interval(500)
//     .skipWhile(i => i < 3)
//     .takeWhile(i => i < 20)
//     .subscribe(createSubscriber("Takewhile"))
// Skip while and take while allows to pass predicates to our skip and take

// skip Until takes in an observable, and when this observable produces a result,
// then it will start taking those items
Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(2000))
    .takeUntil(Rx.Observable.timer(4000)) // emits item until 4 seconds then completes
    .subscribe(createSubscriber("skipuntil"))


