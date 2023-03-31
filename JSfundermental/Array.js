//let array= [4,8,12,16,20,24]
//array.pop ()
//array.push (26)

//console.log(array);

//array.shift ()
//array.unshift (5)

//console.log(array)


//Task

let numbers= [1,2,3,4,5,6,7,8,9,10,11,12]
let even = Array ()
let odd = Array ()
for(k = 0; k < numbers.length; k++ ){
    if (numbers[k] % 2 == 0){
        even.push(numbers[k]);
    }
    else{
        odd.push(numbers[k]);
    }
}
console.log(even)
console.log(odd)