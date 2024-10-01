const students = require('../students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
   //TODO 
   
      const floorStudents = studentsOnFloor();     
      console.log(`Emeleteken lakó tanulók száma: ${floorStudents.length}`);
}

console.log(f1());
module.exports = f1;