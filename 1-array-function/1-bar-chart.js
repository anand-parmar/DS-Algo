let n=5
let data=[3,1,0,7,5]


let max= Math.max( ...data ) 

for( let i=max; i >=0 ; i-- ){
    ans=''
    data.forEach(element => {
        if( i >=max ){
            ans+='1 '
        }else{
            ans+='0 '
        }
        //ans=ans+''+element
    });
    console.log( ans )
}