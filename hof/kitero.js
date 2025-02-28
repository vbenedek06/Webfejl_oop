const fv1=(a,b)=>{
    return a+ b;
}
console.log(fv1(1,2))

const fv2=(a,b,cb)=>{ ////hof(higher order function)
    const v1 = cb(a,2)
    const v2 = cb(b,4)
    const ossz =cb(v1,v2)
    return ossz
}
const res1 = fv2(5,7,(a,b)=> {
    return a+b})
    console.log(res1)
  
const res2 = fv2(5,7,fv1)
console.log(res2)

const fv3 =(operator)=>{ //hof(higher order function)
    if(operator === '-'){
        return(a,b)=>{
            return a-b
        }
    }
    if(operator === "*2"){
        const multi = 2
        return (a,b)=>{
            return multi *(a+b)
        }
    }
}


const fv4 = fv3('-')
fv4(5,7)
console.log(fv4(5,7))

const res3 = fv2(5,7,fv3('-'));
console.log(res3)

const res4 = fv2(5,7,fv3('*2'));
console.log(res4)