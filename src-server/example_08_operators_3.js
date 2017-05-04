import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Map
// Rx.Observable.interval(1000)
//     .map(x => x * 2)
//     .take(5)
//     .subscribe(createSubscriber("Merge1"));

// Map Implementation
// function arrayMap(arr, projection) {
//     var returnArr = []
//     for (let item of arr) {
//         const projected = projection(item)
//         returnArr.push(projected)
//     }
//     console.log(returnArr)
// }

// function multiply(elem) {
//     return elem * 2
// }

 
// 2. MergeMap Implementation
// function arrayMergeMap(arr, projection) {
//     var returnArr = [];
//     for (let item of arr) {
//         const projectedArr = projection(item)
//         for (let subItem of projectedArr) {
//             returnArr.push(subItem)
//         }
//     }
//     return returnArr
// }

// Map and Merge Operation at the same time 
// Rx.Observable.range(2, 3)
//     .mergeMap(x => Rx.Observable.timer(x * 2000).map(() => `After ${x * 2} seconds`))
//     .subscribe(createSubscriber("MergeMap"))

// Second example

// To extract out each tracks, we can use mergeMap, tracks goes into Observable
// from* tracks. We are taking the tracks array and converting into an observable using
// the from* factory, that takes those tracks and converts into an observable, that emilts
// each individual item, and then mergeMap is taking that observable and merging
// all of its responses back into the stream. Now we can edit each tracks individually

// Rx.Observable.fromPromise(getTracks())
//     .mergeMap(tracks => Rx.Observable.from(tracks))
//     .subscribe(createSubscriber("promisedTracks"))

// function getTracks() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(["tr1", "tr2", "tr3", "tr4"]);
//         }, 1000);
//     });
// };

// Third Example of MergeMap - Performing Async Operations 
Rx.Observable.of("my query")
    .do(() => console.log("Querying"))
    .mergeMap(a => query(a))
    .do(() => console.log("After querying"))
    .subscribe(createSubscriber("query"));

// "After Querying" immediately runs after "querying". Since RxJS understands promises,
// it is going to wait for that promise to resolve before it emits that final item
// into the pipeline 
// MergeMap is incredibly useful

function query (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("THIS IS THE VALUE")
        }, 1000)
    })
}

// 3. Switch Map - behaves similar to merge map, but it only swiches the old emitted value
// by the latest emitted value and only the the latest emitted value gets returned
// it is VERY useful in User Interfaces where we have async happening, while th user
// is interacting with the website, because often times we will send of these async,
// but the user might make another request, and we might just wanna forget the last async request
