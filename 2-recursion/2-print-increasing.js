ans(5)

function ans(n){
    if( n==0 ){
        return 
    }
    ans(n-1)
    console.log(n)
}