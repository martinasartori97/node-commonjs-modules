const firstName = 'Martina';
const lastName = 'sartori';

function fullName(firstName, lastName) {
    const risultato = `${firstName} ${lastName}`;

    return risultato;

}

fullName(firstName, lastName);

console.log(fullName(firstName, lastName));

module.exports = fullName
