const myHobbies = ('gym','atletics','basket');

function createMyHobbies  (hobbyOne, hobbyTwo, hobbyThree){
const risultato = `${hobbyOne} ${hobbyTwo} ${hobbyThree}`;
return risultato;
}

createMyHobbies (hobbyOne,hobbyTwo,hobbyThree);
console.log(myHobbies);

module.exports = createMyHobbies

