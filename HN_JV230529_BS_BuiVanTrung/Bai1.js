//Bai 1:
let array = [3,5,88,99,76,8,4,5,85,63];
let max = array[0];
for( i = 1; i < array.length; i++){
    if( max < array[i]){
        max = array[i]
    }
}
console.log(max);