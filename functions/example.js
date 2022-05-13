//function declaration
function calcAge(birthAge){
    
    return 2037 - birthAge;
};
calcAge(1999);
//function expression
const elligibleAge = birth => {
 const age = 2030- birth;
 const elligble = 65 -age;
 return elligble;

}

// console.log( elligibleAge(1990));

// from one function to another function

const bonus = function(hype){
    return hype * 2;
}
const score = function(klaus,elijah) {
    const klausCredits = bonus(klaus);
    const elijahcredits = bonus(elijah);
    const dayCredits = `Credits for the day klaus has ${klausCredits} credits, and elijah has ${elijahcredits} credits.`;
    return dayCredits;
};
console.log(score(4,6));