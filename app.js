let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

let tableauUnDeu = tableauUn.map(item => item**item);
let tableauUnTrois = tableauUn.map(item => item*10);
let tableauUnQuatre = tableauUn.map(item => (item+2)/26);
let tableauUnCinq = tableauUn.filter(item => item > 2);
let tableauUnSix = tableauUn.filter(item => item %2 === 0);
let tableauUnSept = tableauUn.filter(item => item*3 > 10);


let tableauDeuxDeux = tableauDeux.map(item => item.length);
let tableauDeuxTrois = tableauDeux.map(item => [item, item.length]);
let tableauDeuxQuatre = tableauDeux.map(item => item + item);
let tableauDeuxCinq = tableauDeux.filter(item => item.length > 2+2);
let tableauDeuxSix = tableauDeux.filter(item => item.length %2 === 0);
let tableauDeuxSept = tableauDeux.filter(item => item.length -3 > 10);