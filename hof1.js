// var nums = [3, 8, 9, 6, 12];

// var res = function (elem) {
//   return elem % 2 == 1;
// };

//  console.log(nums.filter(res));


// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4]
// Sample Output - 24

var arr = [2,3,4];
var res = arr.reduce(function(ac,vc){
    return ac*vc
})
console.log(res)


// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4


// var arr = [1,2,3,4];
// var isOdd= function(element){
//     return element%3==1
// }
// var calsum=function(ac,vc){
//     return ac+vc
// }
// var res = arr.filter(isOdd).reduce(calsum)
// console.log(res)


// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243 (27+216)

