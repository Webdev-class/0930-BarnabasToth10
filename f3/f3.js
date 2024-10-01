const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
    //TODO

    const freeDormitoryFalseCount = students.filter(s => s.freeDormitory === false).length;
    const nonNullDormitoryPriceCount = students.filter(s => s.dormitoryPrice !== null).length;
  
    if (freeDormitoryFalseCount === nonNullDormitoryPriceCount) {
      console.log("Nincs eltérés");
    } else {
      console.log(`Van eltérés: ingyenes Kollégium hamis szám: (${freeDormitoryFalseCount}) "non-null" értékű kollégiumok: (${nonNullDormitoryPriceCount}).`);
    }
}

console.log(f3())

module.exports = f3;