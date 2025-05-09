function permutation(a) {
    return a.reduce(function(list,element) {
        let newlist = [];
        list.forEach(function(seq) {
            for(let i=seq.length; i>=0; i--) {
                let newseq = [].concat(seq);
                newseq.splice(i, 0, element);
                newlist.push(newseq);
            }
        });
        return newlist;
    },[[]]);
}

let N = 3;
for(var i=1, a=[]; i<=N*N; i++) a=a.concat(i);
let m = new Array(N);
for(let i=0; i<N; i++) m[i] = new Array(N);
permutation(a).forEach(function(p) {
    for(let i=0, index=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            m[i][j] = p[index++];
        }
    }
    if(isMagicSquare(m)) {
        m.forEach(function(v) { console.log(v); });
        console.log("-----");
    }
})

function isMagicSquare(m) {
    let n = m.length;
    let s = n*(n*n+1)/2;
    let sumDiagonalR = 0;
    let sumDiagonalL = 0;
    for(let i=0; i<n; i++) {
        let sumRow = 0;
        let sumColumn = 0;
        for(let j=0; j<n; j++) {
            sumRow += m[i][j];
            sumColumn += m[j][i];
        }
        if(sumRow !== s || sumColumn !== s) return false;
        sumDiagonalR += m[i][i];
        sumDiagonalL += m[i][n-i-1];
    }
    if(sumDiagonalR !== s || sumDiagonalL !== s) return false;
    return true;
}

