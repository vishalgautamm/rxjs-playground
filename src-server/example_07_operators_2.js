import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Concat, Merge

// Merge - merges one sequence onto another

// Rx.Observable.interval(1000)
//     .merge(Rx.Observable.interval(500))
//     .take(3)
//     .subscribe(createSubscriber("Merge"))

// Example 2 of using Merge
// Rx.Observable.merge(
//     Rx.Observable.interval(1000).map(x => `${x} seconds `),
//     Rx.Observable.interval(500).map(x => `${x} half seconds`))
//         .take(10)
//         .subscribe(createSubscriber("Merge 2"));

// Example 3 of Merge using with socket events
// const currentUsers = Rx.Observable.merge(
//     socket.on$("login").map(user => processUser(user)),
//     socket.on$("logout").map(user => null)
// )


// Concat

// Rx.Observable.range(1, 5)
//     .concat(Rx.Observable.range(10, 3))
//     .subscribe(createSubscriber("Concat1"))

// Rx.Observable.interval(1000)
//     .take(4)
//     .concat(Rx.Observable.range(10, 3))
//     .subscribe(createSubscriber("Concat1"))

// Second observable only runs once the first one finishes running
// Rx.Observable.concat(
//     Rx.Observable.interval(1000).map(x => `${x} seconds `).take(5),
//     Rx.Observable.interval(500).map(x => `${x} half seconds`).take(7))
//         .subscribe(createSubscriber("Concat2"))