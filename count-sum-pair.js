let arr=[1,2,3,4,5]
let sum=6

let hash=[]
let ans=0

arr.forEach((element,key) => {
   let a = sum - arr[ key ]
   console.log({a,hash})
   
   if( hash[a] != undefined ){
    ans++
   }else{
    hash[a]=1
   }
});

console.log( hash )
console.log( ans )