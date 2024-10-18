const weekday = prompt('Välj en siffra mellan 1 och 7')

switch(weekday) {
    case '1':
    alert(1 + ' = Måndag')
    break
    case '2':
    alert(2 + ' = Tisdag')
    break
    case '3':
    alert(3 + ' = Onsdag')
    break
    case '4':
    alert(4 + ' = Torsdag')
    break
    case '5':
    alert(5 + ' = Fredag')
    break
    case '6':
    alert(6 + ' = Lördag')
    break
    case '7':
    alert(7 + ' = Söndag')
    break
    default:
    alert('false')
}