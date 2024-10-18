/*Lisebergsvakten 2*/

const ticket = prompt('Vilken typ av åkband har du köpt: small, medium, large eller platinum?')

if (ticket === `large`) {
    alert('Grattis, du kan åka Balder')
}
else if (ticket === `platinum`) {
    alert('Grattis, du kan åka Balder')
}
else {
    alert('Tyvärr, du kan inte åka Balder')
}

/* || - alt gr <


 const height = prompt("Vad har du för åkband?")

 if(height === "large" || height === "platinum") {
     console.log("Du får åka Balder!")
 }

 else {
     console.log("Du får tyvärr inte åka Balder!")
 }


*/