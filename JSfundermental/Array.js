//let array= [4,8,12,16,20,24]
//array.pop ()
//array.push (26)

//console.log(array);

//array.shift ()
//array.unshift (5)

//console.log(array)


//Task

//let numbers= [1,2,3,4,5,6,7,8,9,10,11,12]
//let even = Array ()
//let odd = Array ()
//for(k = 0; k < numbers.length; k++ ){
   // if (numbers[k] % 2 == 0){
   //     even.push(numbers[k]);
   // }
   // else{
   //     odd.push(numbers[k]);
//    }
//}
//console.log(even)
//console.log(odd)


          //Task 2 Sorting numbers

//let numbers= [-3,-100,10,4,6,7,20,1]
//numbers.sort(function(a, b) {return a-b});
//let minNumber= numbers[0]
//let maxNumber= numbers

// Task 3 Arrange alphabets 

//let alphaberts= ["C","A","F","H","B","G","D","E"]
//alphaberts.sort()
//console.log(alphaberts)


//     Task 4 Reversing

//let myName= "Luxolo";

//let splitname = myName.split("")

//let reversedname = splitname.reverse()

//let joinedname = reversedname.join("")

//console.log(reversedname);


// Task 5
//let numbers = []
//function maxAndMin(numbers){
  //  let obj={}
    //numbers.sort((a,b)=> a-b)
    //obj["minNumber"] = numbers[0]
    //obj["maxNumber"] = numbers[numbers.length -1]
    //returnobj(obj)
    //let firstApp = maxAndMin([])
    //console.log(firstApp)
//}
// maxAndMin ([([1,2,3,4,5,6,7,8,9])])

//function strReversed (text){
//    let reversed=""
//    for(let i = 0; i<10; i++){
//        reversed= text[i] + reversed;
//    }
//    console.log(reversed);
//}
//strReversed();
//strReversed()


               //Task 6 Parameter

//function calcSalary (hr,h,d,pci = 1.00){
  //  let salary= hr*h*d*pci
    //console.log(salary)
    //return hr*h*d*pci
//}
//calcSalary(32,7,20,1.2)
//calcSalary(32,7)

             //Task

//function emailGen(fname="Jon",lname="Doe"){
//function emailGen(fname="Luxolo",lname="Mgwayi"){
    //return fname+"."+lname+"@gsb.co.za"
  //    let email= fname+"."+lname+"@gsb.co.za"
    //  return email. toLowerCase()
//}
//console.log (emailGen("Jon.Doe" ))

                   //Example
let num1= [1,3,5,7]
let num2= [0,2,4,6]
let num3= [...num1, ...num2]
let num4= num1.concat(num2)

console.log("This is num3", num3)
console.log("This is num4", num4)