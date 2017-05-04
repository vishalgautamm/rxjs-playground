import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Zip, WithLatest, CombineLatest

// function arrayZip(array1, array2, selector) {
//     const count = Math.min(array1.length, array2.length)
//     const results = []

//     for (let i = 0; i < count; i++) {
//         const combined = selector(array1[i], array2[i])
//         results.push(combined)
//     }
//     console.log(results)
// }
// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [11, 22, 33, 44, 55, 66, 77]
// arrayZip(arr1, arr2, (elem1, elem2) => [elem1, elem2])

// Rx.Observable.range(1,10)
//     .zip(Rx.Observable.interval(500), (left, right) => `item ${left}, at ${right * 500}`)
//     .subscribe(createSubscriber("zip"));

// WithlatestFrom
// Rx.Observable.interval(1000)
//     .withLatestFrom(Rx.Observable.interval(500))
//     .subscribe(createSubscriber("WithLatest"))

// CombineLatest
// Rx.Observable.interval(1000)
//     .combineLatest(Rx.Observable.interval(500))
//     .take(5)
//     .subscribe(createSubscriber("WithLatest"))


// Use cases: Authentication and authorization

// const currentUsers$ = new Rx.BehaviorSubject({ isLoggedIn: false });

// Rx.Observable.interval(1000)
//     .withLatestFrom(currentUsers$)
//     .filter(([i, user]) => user.isLoggedIn)
//     .subscribe(createSubscriber("withLatestFrom"))

// setTimeout(() => {
//     currentUsers$.next({ isLoggedIn: true})
// }, 3000)
