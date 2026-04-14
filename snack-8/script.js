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

function findClass (student){
  let classe
  if (student.name === 'Marco Lanci') {
    classe = student.class
  }
  return classe;
}
const lanciClass = students.find(findClass).class;
console.log(lanciClass);


const frecciaClass = students.find(student => student.name === 'Marco Lanci').class;
console.log(frecciaClass);
