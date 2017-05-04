import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";
import fs from "fs";

// Three main functions: fromEvent, fromPromise, bindNodeCallback

// EXAMPLE 1: RxJS and NodeJS
// Reading all the directories
fs.readdir("./src-server", (err, files) => {
    if (err) console.error(err);
    else console.log(files)
})

const readDir = Rx.Observable.bindNodeCallback(fs.readdir);
readDir("./src-server")
    .mergeMap(file => Rx.Observable.from(file))
    .map(file => `MANIPULATED ${file}`)
    .subscribe(createSubscriber("Read directory"));

// EXAMPLE 2: PROMISES
function getItem() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello")
        }, 1000);
    });
};

Rx.Observable.fromPromise(getItem())
    .subscribe(createSubscriber("promise"))