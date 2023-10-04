
let listeItem = [];
   //  indexOf = (arr, q) => arr.findIndex(ele => q.toLowerCase === )
function additioner() {
   let item = document.getElementById("item").value;
   item = item.toLowerCase();
   
   if(item == ""){
       alert("please and an item");
   }else{
           
       if(listeItem.indexOf(item) < 0 ){
           listeItem.push(item)
           nettoyer();
           implemanter();
   }else{
      alert("ce nom existe deja")
   }
       }
   
   
}
function nettoyer(){
    document.getElementById("item").value = "";
}
function implemanter(){
    document.getElementById("liste").innerText = listeItem.join(' -- ');
}