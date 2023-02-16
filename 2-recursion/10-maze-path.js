console.log( ans1(1,1) )

// maz path with one horizontal or one vertical

function ans(i,j){
    if( i == 3 && j == 3 ){
        return ['']
    }
    if( i > 3 || j > 3 ){
        return []
    }

    let h=ans(i,j+1)
    let v=ans(i+1,j)

    let final=[]
    h.forEach(e => {
        final.push('h'+e)
    });
    v.forEach(e => {
        final.push('v'+e)
    });
    return final
}

// maz path with more theb 1 horizontal or more then vertical or more then 1 digional allowed
function ans1(i,j){
    if( i==3 && j==3 ){
        return ['']
    }
    if( i>3 || j > 3 ){
        return []
    }

    let final=[]
    for(let m=1;m<=(3-j);m++){
        let h=ans1(i,j+m)
        h.forEach((item)=>{
            final.push('h'+m+' '+item)
        })
    }

    for(let m=1;m<=(3-i);m++){
        let v=ans1(i+m,j)
        v.forEach((item)=>{
            final.push('v'+m+' '+item)
        })
    }

    for(let m=1;m<=(3-i) && m <=(3-j);m++){
        let d=ans1(i+m,j+m)
        d.forEach((item)=>{
            final.push('d'+m+' '+item)
        })
    }

    return final

}
