displaydata(4)

function displaydata(n){
    console.log( n )
    if( n==0 ){
        return
    }
    displaydata( n-1 )
    console.log( n )
}