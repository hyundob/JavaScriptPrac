function norm(x) {
    const sum2 = sumSquare();
    return Math.sqrt(sum2);
    function sumSquare() {
        let sum = 0;
        for (let i = 0; i<x.length; i++) sum+=x[i]*x[i];
        return sum;
    }
}

var a = [2,1,3,5,7];
var n =norm(a);
console.log(n);