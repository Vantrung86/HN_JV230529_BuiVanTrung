
// Dung ham
var outputDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
   };
   
console.log(outputDaysInMonth(8, 2023));



// cach 2

let month = +prompt('nhap thang');
let year = +prompt('nhap nam');
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng " + month + " có 31 ngày.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng " + month + " có 30 ngày.");
        break;
    case 2:   
        console.log("Tháng " + month + " có 28 ngày.");
        break;
}