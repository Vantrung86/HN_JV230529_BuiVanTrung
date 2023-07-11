const string = 'this is A tEst';
const array = string.trim().split(/\s+/);
for(let i = 0; i < array.length; i++) {
    let isString = array[i];
    let isStringUpperCase = isString.charAt(0).toUpperCase() + isString.slice(1).toLowerCase();
    array[i] = isStringUpperCase; 
}
let output = array.join(' ');
console.log(output);