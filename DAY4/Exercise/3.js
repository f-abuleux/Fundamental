function bmi(weight, height) {
    let bmiCalculated = weight / (height/100);
    if (bmiCalculated < 18.5) {
        return "Less Weight";
    } else if (bmiCalculated < 24.9 && bmiCalculated > 18.5) {
        return "Ideal";
    } else if (bmiCalculated < 29.9 && bmiCalculated > 25.0) {
        return "Overweight";
    } else if (bmiCalculated < 39.9 && bmiCalculated > 30.0) {
        return "Very Overweight";
    } else 
        return "Obesity"
}
console.log(bmi(69, 160))