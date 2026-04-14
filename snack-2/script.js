const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Funzione + callback esterno
function printNames (arr) {
  console.log(arr.name);
};
people.forEach(printNames);

// Funzione anonima
people.forEach (function(arr) {
  console.log(arr.name);
});

// Arrow function
people.forEach ((arr) => {
  console.log(arr.name);
});

// Per stampare in un unico array (.map)
function stampaNomi (nomi) {
    return nomi.name
};
console.log(people.map(stampaNomi));