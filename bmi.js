// cosing challenge -- 
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.


const mark = {
    weight: 78,
  height: 1.69
};
const john = {
    weight: 95,
    height: 1.88,
};

 const bmiMark = mark.weight/mark.height ** 2; 
 const bmiJohn = john.weight/(john.height*john.height);
//  console.log(mass);

// function Person(mass, height) {
//     this.mass = mass;
//     this.height = height;
// }

// let john = new Person(35, 65);

// console.log(john);


console.log(bmiMark);
console.log(bmiJohn);

if(bmiMark>bmiJohn){
    console.log('true');
}else{
    console.log('false');
}

