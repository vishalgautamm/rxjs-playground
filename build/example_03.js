"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Three main functions: fromEvent, fromPromise, bindNodeCallback

// EXAMPLE 1: RxJS and NodeJS
// Reading all the directories
_fs2.default.readdir("./src-server", function (err, files) {
    if (err) console.error(err);else console.log(files);
});

var readDir = _Rx2.default.Observable.bindNodeCallback(_fs2.default.readdir);
readDir("./src-server").mergeMap(function (file) {
    return _Rx2.default.Observable.from(file);
}).map(function (file) {
    return "MANIPULATED " + file;
}).subscribe((0, _util.createSubscriber)("Read directory"));

// EXAMPLE 2: PROMISES
function getItem() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Hello");
        }, 1000);
    });
};

_Rx2.default.Observable.fromPromise(getItem()).subscribe((0, _util.createSubscriber)("promise"));