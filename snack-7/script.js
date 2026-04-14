const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// Funzione + callback
function findIdTwo (student) {
  return student.id === 2;
};
const studentTwo = students.find (findIdTwo);
console.log(studentTwo);

// Arrow corta
const studentTwoArrow = students.find(student => student.id === 2);
console.log(studentTwoArrow);
