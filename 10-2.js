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
let a = [1,2,3];
permutation(a).forEach(function(v) { console.log(v);});