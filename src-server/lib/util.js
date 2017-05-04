export function createSubscriber(tag) {
    return {
        next(item) { console.log(`${tag}.next ${item}`); },
        error(error) { console.log(`${tag}.error ${ error }`); },
        complete() { console.log(`${tag}.complete`); }
    }
}

// if we want to get error stack: error(error) { console.log(`${tag}.error ${error.stack || error }`); },