toh( 3, '1','3','2' )

function toh( n, A,B, C ){
    if( n == 0 ){
        return 
    }
    toh( n-1,A,C,B )
    console.log(`move disk ${n} from road ${A} to road ${B} `)
    toh( n-1,C,B,A )
}

