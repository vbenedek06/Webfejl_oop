const fv1=(a,b)=>{
    return a+ b;
}
console.log(fv1(1,2))

const fv2=(a,b,cb)=>{
    const v1 = cb(a,2)
    const v2 = cb(b,4)
    const ossz =cb(v1,v2)
    return ossz
}
