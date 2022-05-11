let country = 'India';
let continent = 'Asia';
let population = 10000000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = true;
isIsland = false;

const language = 'telugu';
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

population++;   
console.log(population);
console.log(population> 6);

// Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

const description = `${country} is  in ${continent}, and its population is ${population}`;
console.log(description);

/* Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?'); */

const numNeighbours =  +(prompt('How many neighbour countries does your country have?'));
//prompt will give the output as a string 
if(numNeighbours === 1){
    console.log('only 1 border');
}else if(numNeighbours>1){
    console.log('more than 1 border');
}else{
    console.log('no border');
}