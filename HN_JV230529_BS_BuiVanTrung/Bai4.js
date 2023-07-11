let arr = [3,25,38,49,12];
//Dung ham sort
arr.sort(
    function(a,b){
        if(a > b){
            return -1;
        }
        else if(a < b){
            return 1;
        }
        else 0;
    }
)
console.log(arr);

// khong dung ham sort
for(i= 0; i < arr.length; i++){
    for(j = 0; j < arr.length; j++){
        if(arr[j] < arr[j+1]){
            let result = arr[j];
            arr[j] = arr[j+1];           
            arr[j+1] = result;
        }
    }
}
console.log(arr);