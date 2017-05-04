import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Buffer

//Buffer count  - takes x amount of items and buffers them into a single array and emits that array
// as an item in the stream
// Rx.Observable.range(1, 50)
//     .bufferCount(10 )
//     .subscribe(createSubscriber("Buffer"))

// Buffer time - it will emit all of the items acquired in x seconds
// emits them as an array
// Rx.Observable.interval(500)
//     .bufferTime(1000)
//     .subscribe(createSubscriber("BufferTime"))


// Buffer time - implemented differently
// We see the exact same behaviour here
// the buffer takes in an Obs, and every time that Obs prod an event, it will cause the 
// buffer to flush
// We can cause the buffer until the user passes a button
// Rx.Observable.interval(500)
//     .buffer(Rx.Observable.interval(2000))
//     .subscribe(createSubscriber("Second Buffer"))


// Emits all of the items that were colleted in three seconds
// const stopObject$ = new Rx.Subject();
// Rx.Observable.interval(500)
//     .buffer(stopObject$)
//     .subscribe(createSubscriber("Second Buffer"))

// setTimeout(() => {
//     stopObject$.next();
// }, 3000)

// To Array - single items that contains array of items that were emitted, opposite to 'from'
// 'range' will collect every single item from the source stream, until the source stream terminates

// Rx.Observable.range(0,10)
//     .toArray()
//     .subscribe(createSubscriber("range"))

// what if the Observable never terminates: Rx.Observable.never(). Nothing happens
// It just goes ahead and dies since there is nothing to do, the observable never finished
// never() DOES NOT create an infinite loop, it just does not complete the event 
// since toArray never finished, it never emitted its buffer.

// Rx.Observable.range(0,10)
//     .merge(Rx.Observable.never())
//     .toArray()
//     .subscribe(createSubscriber("range"))


// Use Case: toArray: IF we have a stream and we need to turn it into an array
//           Buffer: same as toArray, but if we have a stream Observabe that always emits something
                // buffer will collect the item, and after some time, it will emit the array
