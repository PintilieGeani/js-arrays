const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

console.log("- - - - - - - - -")

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []
for(let i = 0; i < teachers.length; i++){
  let curTeachers = teachers[i]
  if(curTeachers.length >= 5){
    longNames.push(curTeachers)
  }
}
console.log(longNames)

console.log("- - - - - - - - -")

// 3. Rimuovi 'Ed' dall'array teachers
let ed = teachers.indexOf("Ed")
teachers.splice(ed, 1)
console.log(teachers)