// ELSE IF - Biggest
// const a = 10
// const b = 20

// if (a > b) {
//     console.log('a is bigger than b')
// }
// else {
//     console.log('b is bigger than a')
// }

/*Biggest*/

const number = prompt('Välj en siffra')
const number2 = prompt('Välj en till siffra')

if (number > number2) {
    alert(`${number} är större än ${number2}`) /*backticks när man skriver ut vald nr*/ /* ELLER: (number + ' är större än ' + number2) */
}
else {
    alert(`${number2} är större än ${number}`)
}