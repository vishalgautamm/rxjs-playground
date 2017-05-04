import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Error Handling: Catch and Retry
// Rx.Observable.concat(
//     Rx.Observable.of(42),
//     Rx.Observable.throw(new Error("Yucky")),
//     Rx.Observable.of(10))
//     .subscribe(createSubscriber("Concat"));

// Observable that does a web request: Example

getAPI()
    .retry(5)
    .catch(error => Rx.Observable.of(error)) // error handling in RxJS
    .do(() => console.log("THING"))
    .subscribe(createSubscriber("getAPI"))

function getAPI() {
    return new Rx.Observable(observer => {
        console.log("getting api's")
        setTimeout(() => {
            observer.error(new Error())
        }, 1000)
    })
}

// When the error happens, we immediately unsubscribe and the source that we started with
// also gets unsubscribed from

// Retry doesnt work in Promise resolve and reject's state gets cached
// Where as in Observable, if we re-subscribe to an observer, an 
// the Observer generator function gets greated, so thats a very important difference
// between promises and observables if we are combining the two
