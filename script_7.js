/*BMI kalylator*/

let lenght = prompt('Skriv in ditt längd i m')
let weight = prompt('Skriv in din vikt i kg')

const bmiValue = weight/(lenght*lenght)

// Round the BMI value to one decimal place
const roundedBmi = bmiValue.toFixed(1);

if (bmiValue < 18.5) {
    alert(`Ditt BMI är ${roundedBmi}, du har undervikt`)
}
else if (bmiValue >= 18.5 && bmiValue < 25) {
    alert(`Ditt BMI är ${roundedBmi}, du är i normalvikt`)
}
else if (bmiValue >= 25 && bmiValue < 30) {
    alert(`Ditt BMI är ${roundedBmi}, du har övervikt`)
}
else {
    alert(`Ditt BMI är ${roundedBmi}, du har fetma`)
}
