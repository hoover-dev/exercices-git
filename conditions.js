let heure = 15;
if (heure < 12) {
    console.log("Bonjour");
} else if (heure < 18) {
    console.log("Bon apres-midi");
} else {
    console.log("Bonsoir");
}


let solde = 5000;
let statut = solde >= 1000 ? "Solde OK" : "Solde insuffisant";
console.log(statut);


let etudiants = [
  { nom: "Paenéach", note: 15 },
  { nom: "Koffi",    note: 8  },
  { nom: "Ama",      note: 12 },
  { nom: "Yao",      note: 9  },
  { nom: "Efua",     note: 17 }
];

// Admis
let admis = [];
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].note >= 10) {
    admis.push(etudiants[i].nom);
  }
}
console.log("Admis :", admis);

// Meilleur étudiant
let meilleur = etudiants[0];
for (let i = 1; i < etudiants.length; i++) {
    if (etudiants[i].note > meilleur.note) {
        meilleur = etudiants[i];
    }
}
console.log(`note: ${meilleur.note}/20`);
console.log("Le meilleur étudiant est:", meilleur.nom);

// Moyenne
let total = 0;
for (let i = 0; i < etudiants.length; i++) {
    total += etudiants[i].note;
}
let moy = total / etudiants.length;
let statut2 = moy >= 12 ? "Classe forte" : "Classe faible";
console.log("Moyenne de la classe :", moy.toFixed(2));
console.log(statut2);