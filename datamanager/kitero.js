
//1.
const sum = (a, b)=>{
    const result = a+b;
    return result;

}
//2
const obj = {}
obj.calculate1 = sum
//3
obj.calculate2 = (cb)=> {
    const res= cb(4,5)
    return res;
}

//4
const result1 = obj.calculate2((a,b)=> {
    const szam3 = a+b;
    return szam3;
})
//5
const result2 = obj.calculate2((a,b)=> {
    const szam3 = a-b
    return szam3
})
//5
obj.calculate3 = (a,b,cb)=> {
    const szam3= cb(a,b)
    return szam3;
}
const result3 = obj.calculate3(5,7,(a,b)=>{
    return a+b
})//5

const theFunction = ()=> {
    const szam10 = 10
    const finalRes = obj.calculate3( 5, 7, //closure a neve
        (a,b) => {
            return a*szam10 + b
        })
    console.log(finalRes)
}



console.log(sum(4,5))// elso fv
console.log(obj.calculate1(4,5))//masodik fv
console.log(result1)//3
console.log(result2)//4
console.log(result3)
theFunction()