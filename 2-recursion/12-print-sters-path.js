ans(4,"")

function ans(s,o){
    if( s ==0 ){
        console.log(o)
        return
    }
    if( s< 0 ){
        return
    }

    ans(s-1,o+"1")
    ans(s-2,o+"2")
    ans(s-3,o+"3")
}