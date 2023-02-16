var str='abc'

// result=r(str)
// console.log( result )

// utilize more ram because we are storing in array
// function r(str){
//     if( str == '' ){
//         return ['']
//     }
    
//     let firstchar=str.charAt(0)
//     let substr=str.substring(1)

//     let basearr=r(substr)
//     let finalarr=[]
//     basearr.forEach((data)=>{
//         finalarr.push(data)
//     })
//     basearr.forEach((data)=>{
//         finalarr.push(data+firstchar)
//     })

//     return finalarr
// }

ans(str,"")

function ans(o,t){
    if( o.length == 0 ){
        console.log(t)
        return
    }

    let f=o.charAt(0)
    let str=o.substring(1) || ''

    ans(str,t+f)
    ans(str,t+"")
}