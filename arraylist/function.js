function fun(parameter){
    console.log(parameter.nev)

}
function funA(){
    console.log(this.nev)
}
fun({nev:"valaki"});