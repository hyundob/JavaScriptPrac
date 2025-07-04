function sleepAndError(g, n) {
    setTimeout(function() {
        for(var i=0; i<n; i++) console.log(i);
        g.throw(new Error("오류가 발생했습니다."));
    }, 1000);
}

function run(callback, ...argsList) {
    var g = (function* (cb, args) {
        try {
            yield cb(g, ...args);
        } catch(e) {
            console.log("예외 " + e);
        }
    })(callback, argsList);
    g.next();
}

run(sleepAndError, 10);