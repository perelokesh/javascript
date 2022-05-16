function splitString(stringToSplit, separator){
    const arrayOfStrings = stringToSplit.split(separator)
    console.log('The original string is: ', stringToSplit);
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '));
}
const tempestString = 'Oh brave new world that has such people in it.';
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
const space = ' '
const comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)


const names = 'American Tourist; Abd Villers; Virat Kohil; Arjun Reddy';
console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);
console.log(nameList);

const str = 'banana banana';
const strRecverse = str.split('').reverse().join('');
console.log(strRecverse); 
if(str === strRecverse){
    console.log('true');
}else{
    console.log('false');
}