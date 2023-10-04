
let listeItem = [];
function additioner() {
   let item = document.getElementById("item").value;
   
   listeItem.push(item)
   
   implemanter();
   nettoyer();
}
function nettoyer(){
    document.getElementById("item").value = "";
}
function implemanter(){
    document.getElementById("liste").innerText = listeItem.join('--');
}