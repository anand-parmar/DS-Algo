let phone=[
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
]

let a=[2,3,4]

console.log(ans(a))


function ans(a){
    if( a.length == 0 ){
        return ['']
    }
    let firstchar=a[0]
    let substr=a.slice(1)
    let subarr=ans(substr)
    let final=[]

    let combi=phone[ Number(firstchar) ]

    for (let index = 0; index < combi.length; index++) {
        const element = combi[index];
        subarr.forEach( (data) =>{
            final.push(element+data)
        })
    }
    return final
}