const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Function + callback
function numPari (num) {
    return num % 2 === 0
};
const numeriPari = nums.filter(numPari);
console.log(numeriPari);

// Funzione anonima
const numeriPariAnonimi = nums.filter (function(num){
    return num % 2 === 0;
});
console.log(numeriPariAnonimi);

// Arrow contratta
const numeriPariArrow = nums.filter((num => num % 2 === 0));
console.log(numeriPariArrow);
