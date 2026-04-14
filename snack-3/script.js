const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Funzione con callback esterno
function incrementoUno (arr, index) {
    return (arr + 1)
};
console.log(numbers.map(incrementoUno));

// Funzione anonima con pre incremento
const numAn = numbers.map (function (number){
    return ++number
});
console.log(numAn);

// Arrow funct
const numArrAn = numbers.map ((numb) => {
    return ++ numb;
});
console.log(numArrAn);
// Arrow più contratta
const numArrAnContr = numbers.map(num => ++num);
console.log(numArrAnContr);
