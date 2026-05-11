// Semaine 3 Jour 1 - Arrays JavaScript
// Paenéach Hoover - ESAG-NDE Lomé

// Bases
const villes = ["Lomé", "Accra", "Lagos", "Toronto"];
console.log(villes[0]);
console.log(villes.length);

// Méthodes
const fruits = ["mangue", "papaye", "ananas"];
fruits.push("orange");
console.log(fruits);

// map, filter, reduce
const notes = [12, 15, 8, 18, 14, 10];
const bonnesNotes = notes.filter(n => n >= 14);
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
console.log("Bonnes notes : ", bonnesNotes);
console.log("Moyenne : " + moyenne);

// Boucles
const etudiants = ["Paenéach", "Koffi", "Ama", "Sena"];
etudiants.forEach(e => console.log("Bonjour " + e + " !"));