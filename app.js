let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
const body = document.querySelector('body')

function draw (array){
    const div = document.createElement("div")
    div.innerHTML = array.join(" ")
    body.appendChild(div)
}

let tableauUnDeux = tableauUn.map(item => item**item);
draw(tableauUnDeux);
let tableauUnTrois = tableauUn.map(item => item*10);
draw(tableauUnTrois);
let tableauUnQuatre = tableauUn.map(item => (item+2)/26);
draw(tableauUnQuatre);
let tableauUnCinq = tableauUn.filter(item => item > 2);
draw(tableauUnCinq);
let tableauUnSix = tableauUn.filter(item => item %2 === 0);
draw(tableauUnSix);
let tableauUnSept = tableauUn.filter(item => item*3 > 10);
draw(tableauUnSept);

let tableauDeuxDeux = tableauDeux.map(item => item.length);
draw(tableauDeuxDeux);
let tableauDeuxTrois = tableauDeux.map(item => [item, item.length]);
draw(tableauDeuxTrois);
let tableauDeuxQuatre = tableauDeux.map(item => item + item);
draw(tableauDeuxQuatre);
let tableauDeuxCinq = tableauDeux.filter(item => item.length > 2+2);
draw(tableauDeuxCinq);
let tableauDeuxSix = tableauDeux.filter(item => item.length %2 === 0);
draw(tableauDeuxSix);
let tableauDeuxSept = tableauDeux.filter(item => item.length -3 > 10);
draw(tableauDeuxSept);