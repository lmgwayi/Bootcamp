// let r = 15;

// if ( r % 2 == 0 ){
//      console.log("It is even number")
//      }
//      else{
//         console.log("It is an odd number")
//      }

// function checkEvenNumber(){

   //let number = document.getElementById(evennumber).value

//   if (number%2==0){
//    alert (number + " " + "is an even number")
//}
//else {
// alert (number + " "+" is an odd number")
//}
//}

//FOR LOOP

//for(let i = 0; i <=number.length; i ++){
//console.log(number.length)
//}

let numbers= [2,9,11,7,5,3,4,8,15,17,21,19,24]

for(let i =0; i < numbers.length; i=i+1){

console.log(i);
if (numbers[i]%2==0){
   console.log("it is even numbers"+numbers[i])
}
}