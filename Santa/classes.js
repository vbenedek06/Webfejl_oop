
class Factory{
 // TODO 1, 2, 3, 4, 9, 10
 constructor(){
    this.manolist = []; // mano lista tulajdonság létrehozása, azárt üres mert még nem tartozik hozzá
    this.areaList = [];
 }
 generateId() {
   return this.manolist.length; 
}
 

 AddMano(companion){ // azert kell csak a companion paraméternke, mert a manok list elérhetők classon belul
    this.manolist.push(companion)
    createRow(companion)
    appendToSelector(companion);
 }
}

class Companion{
 // TODO 5
 constructor(id, kernev, veznev, reszleg){
    this.id = id
    this.kernev = kernev
    this.veznev = veznev
    this.reszleg = reszleg
    this.productList = [] //nem szükséges a példány létrehozásához, construktorba
 }


 getName(){ // nem kell paraméter, mert benne van a classban
    return this.kernev + this.veznev

 }

 AddProduct(product){
    this.productList.push(product)

 }
 addArea(areaName) {
   if (!this.areaList.includes(areaName)) {
       this.areaList.push(areaName);
       this.updateAreaSelector();
   }
}

updateAreaSelector() {
   const areaSelector = document.getElementById('carea');
   areaSelector.innerHTML = '';
   for (const area of this.areaList) {
       const option = document.createElement('option');
       option.value = area;
       option.innerText = area;
       areaSelector.appendChild(option);
   }
}

}