//   HOW TO CREATE A FUNCTION?? 

// F = c*9/5+35

// function cToF (){

// alert (F)

// }
// cToF()
// console.log(cToF(15))

function convert(){
 let f = document.getElementById("entercelsius").value
 let c = (f-32) * 5/9;
 
 if(c<16){
   alert(c+"it is cold, wear jacket");
 }else if(c >=16 && c<21){
   alert(c+"it is warm, wear t-shirt + jeans");
 }else {
   alert(c+"it is hot, wear shorts");
 }
 
}
convert()

// function calculateTemp() {
//    function celToFah(celsius) {
//       let fahrenheit = Math.round((celsius * (9/5)) + 32);
//       return fahrenheit;
//    }

//    function fahToCel(fahrenheit) {
//       let celsius = Math.round((fahrenheit - 32) * (5/9));
//       return celsius;
//    }

//    // Checks if Calsius or Fahrenheit is selected
//    let tempSelected = document.getElementById("temp_diff");
//    let valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

//    // Checks the value inside the Temperature input
//    let numberTemp = document.getElementById("temp").value;

//    let result;
   
//    if (valueTemp == 1) {
//       result = celToFah(numberTemp);
//       document.getElementById("resultContainer").innerHTML = "= " + result + "°Fahrenheit";
//    } else {
//       result = fahToCel(numberTemp);
//       document.getElementById("resultContainer").innerHTML = "= " + result + "°Celsius";
//    }
   
// }