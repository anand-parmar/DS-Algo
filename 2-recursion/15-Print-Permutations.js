printper("abc","")

function printper(str,ans){
    if( str.length == 0 ){
        console.log(ans)
        return
    }

    for(let i=0;i<str.length;i++){
        let char=str.charAt(i)
        let rstr=str.substring(0,i)+str.substring(i+1)
        printper(rstr,ans+char)
    }
}