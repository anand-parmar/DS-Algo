ans=d(5)
console.log( ans )

function d(n){
    if( n===1 ){
        return 1
    }
    return n*d(n-1)
}