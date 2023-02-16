console.log( (steps(5)) )

// steps 1 & 2 & 3
function steps(n){
    if( n == 0 ){
        return [""]
    }
    if( n < 0 ){
        return []
    }

    p1=steps(n-1)
    p2=steps(n-2)
    p2=steps(n-3)

    let final=[]
    p1.forEach(d => {
        final.push('1'+d)
    });

    p2.forEach(d => {
        final.push('2'+d)
    });
    p2.forEach(d => {
        final.push('3'+d)
    });

    return final
}

// n=5

// p1=1
// p2=1

// let ans=0
// for(let i=2;i<=n;i++){
//     ans=p1+p2
//     p2=p1
//     p1=ans
// }

// console.log(ans)