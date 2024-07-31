console.log ("hello")

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

foods.push('pizza');
foods.push('cheeseburger');

console.log(foods);

foods.unshift('taco');
console.log('Exercise 3 result:', foods);


let favFood = foods[1];
console.log('Exercise 4 result:',favFood);

//splice(start)//n
//splice(start, deleteCount)//
//splice(start, deleteCount, item0)//
//splice(start, deleteCount, item0, item1)//
//splice(start, deleteCount, item0, item1, /* …, */ itemN) //

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/


foods.splice(2,0,'tofu');

console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
  
foods.splice (1,1, 'sushi','cupcake');
console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
let yummy = foods.slice(1,3);
console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx= foods.indexOf('tofu');

console.log('Exercise 8 result:', soyIdx);


/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allFoods= foods.join('->');

console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('Soup');

console.log('Exercise 10 result:', hasSoup);




//   for (let i = 0; i < arr.length; i++) {
   // console.log(arr[i]);//
  //}
  

  // for (const element of arr) {
   // console.log(element);
 // }
  
  // for (const element of arr) {
    //   console.log(element);
  // }
   //   arr.forEach((element) => {
    //   console.log(element);
 //       });
  

 /*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds= [];


for (const number of nums) {
if (number % 2 !== 0) {

    odds.push(number);
}
}

console.log('Exercise 11 result:', odds);



/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const fizz= [];
const buzz= [];
const fizzbuzz= [];

for (let i = 0; i < nums.length; i++) {
     console.log('this is num[i]',nums[i]);
     console.log('this is i',i);

     if(nums[i] % 3 === 0 && nums[i] % 5 === 0) {
        fizzbuzz.push(nums[i])
    } else if (nums[i] % 3 === 0){
        fizz.push(nums[i])
     } else if(nums[i] % 5 === 0) {
        buzz.push(nums[i])   
}
}

console.log('this is fizz', fizz);
console.log('this is buzz', buzz);
console.log('this is fizzbuzz', fizzbuzz);

        
 




// console.log('Exercise 12 Results:');
// console.log('  fizz:', fizz);
// console.log('  buzz:', buzz);
// console.log('  fizzbuzz:', fizzbuzz);






// const oneDArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]  // this is a 1Dimensional array
// const oneDArray = [
//     1, // 0 index
//     2, // 1 index
//     3, // 2 index                                // so is this-can be split across multiple lines
//     // and so on
//   ]
  




//   const twoDArray = [               // this is a two dimensional array and is an array of arrays. 
//     [1, 2, 3],                        //the inner arrays are referred to as nested arrays
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
// //   In a one-dimensional array, you access elements using a single index. 
// //   For example, to access the number 3 in oneDArray above, you would use oneDArray[2].
// //   In a two-dimensional array, you use two indices: The first specifies the specific array (row),
// //    and the second specifies the element in that array (column). 
// //    To access the number 3 in twoDArray above, you would use twoDArray[0][2]
 
// const twoDArray = [
//     [1, 2, 3], // index 0
//     [4, 5, 6], // index 1
//     [7, 8, 9]  // index 2
//   ];
  


//   //below is indexes of elemetns inside of the nested arrays

//   const twoDArray = [
//     [1, 2, 3], // index 0
//   // 0  1  2
//     [4, 5, 6], // index 1
//   // 0  1  2
//     [7, 8, 9]  // index 2
//   // 0  1  2
//   ];
  

  /*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [      //this is the BIGBIX
	[100, 5, 23],  //smallbox 1
	[15, 21, 72, 9],  //smallbox 2
	[45, 66],  //smallbox3
	[7, 81, 90]  //smallbox 4
];

// to find last box use '.length' to tell how many small boxes inside big box

// last box is at position '.length -1'           ?? last box is at position 3 ???? 


const lastIndex= numArrays.length -1;
const numList = numArrays [lastIndex];
console.log('Exercise 13 result:', numList);




/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
// const numArrays= [      //this is the BIGBoX
// 	[100, 5, 23],  //smallbox 1
// 	[15, 21, 72, 9],  //smallbox 2
// 	[45, 66],  //smallbox3
// 	[7, 81, 90]  //smallbox 4
// ];

    const boxIndex= 2;     //66 position is in box 3 index 2
    const numIndex= 1;   // 66 is at index 1 in box 3

    const num= numArrays[boxIndex][numIndex];   // this is to go to box 3 and then find the 
                                //                 2nd number which is 66 and store it in num

console.log('Exercise 14 result:', num);



/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

// const numArrays = [      //this is the BIGBIX
// 	[100, 5, 23],  //box 1
// 	[15, 21, 72, 9],  //box 2
// 	[45, 66],  //box3
// 	[7, 81, 90]  //box 4
// ];


let total= 0;        //creating variable

numArrays.forEach(function(box) {   //using forEach to go through each smaller box
box.forEach(function(num){ // using forEach to go through each num in each box
total += num;  // addig all the nums to create total
});


});

console.log('Exercise 15 result:\n', total);
