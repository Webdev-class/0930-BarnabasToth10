const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    //TODO
        const clubObject = {};
      
        for (const club of clubs) {
          const [students.name, students.members] = club;
          clubObject[students.name] = students.members;
        }
      
        return clubObject;
      

      
}
console.log(f2());
module.exports = f2;