/*Even or not*/

const number = prompt('Välj en siffra')

if (number % 2 === 0) {
    alert(`${number} är ett jämnt nummer`)
}
else {
    alert(`${number} är ett udda nummer`)
}