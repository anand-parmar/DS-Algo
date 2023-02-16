console.log( d(3) )

function d(n){
    if( n==1 ){
        return '1 1 1'
    }
    return n+' '+d(n-1)+' '+n+' '+d(n-1)+' '+n
}