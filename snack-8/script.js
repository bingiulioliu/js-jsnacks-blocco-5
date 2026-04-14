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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

function whereIsMarco (student){
  if (student.name === 'Marco Lanci'){
    return student};
}
const lanciClass = students.find(whereIsMarco).class;
console.log(lanciClass);


const frecciaClass = students.find(student => student.name === 'Marco Lanci').class;
console.log(frecciaClass);
