// var num = 18
// var isPrime = true
// for(var i = 2;i<num;i++){
//     if(num%i==0){
//         var isPrime =false
//     }
//     }
//     if(isPrime){
//         console.log("yes")
//     }else{
// console.log("No")
//     }
// // find the prime number this number is prime or not and check the ture and false
    var number = 18
    var isPrime = true
    for(var i = 2;i<number;i++){
        if(number%i ==0){
            var isPrime= false
        }
    }
    if(isPrime){
        console.log("Yes")
    }else{
        console.log("No")
    }

// ########  1

// find the output this type = 1 2 3 4
// Sample Output 1
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// than using the next line for ( str = "\n")

// var num = 4
// str = ""
// for(var i = 1;i<=num;i++){
//     for(var j = 1;j<=num;j++){
// str = str +j+" "
//     }
//     str =str+"\n"
// }
// console.log(str)

// ######## 2
// print the frist pattren like this type
// Sample Output 1
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// var num = 5
// var str = ""
// for(var i = 1;i<num;i++){
//     for(var j = 1;j<num;j++){
//         str = str+"* "
//     }
//     str = str +"\n"
// }
// console.log(str)

// <=======>

// #########   3
// find the this Question
// Sample Output
// 1
// 1
// 2
// 1
// 2
// 3
// 1
// 2
// 3
// 4
// num = 4
// str = ""
// for(var i = 1;i<=num;i++){
//     for(var j = 1;j<=num;j++){
//         if (j<=i)
//         // than J is less than equal to I
//         str = str+j+'\n'
//     }
// }
// console.log(str)

// same condition on the I less than is equal to J now print output like
// 1
// 2
// 3
// 4
// 1
// 2
// 3
// 4
// 1
// 2
// 3
// 4
// 1
// 2
// 3
// 4

// ##########  4
// finf the even sum and
// Sample Output
// 0
// 2
// 2
// 6
// num = 4
// for(var i = 1;i<=num;i++){
//     sum = 0
//     for(var j = 1;j<=num;j++){
//         if(j<=i)
//         if(j%2==0)
//         sum = sum +j
//     }
//     console.log(sum)
// }

// ########## 5
// find the odd sum
// sample output
// 1
// 1
// 4
// 4

// var N = 4
// for(var i = 1;i<=N;i++){
//     sum = 0
//     for(var j = 1;j<=N;j++){
//         if(j<=i){
//             if(j%2===1){
//                 sum = sum+j
//             }
//         }
//     }
//     console.log(sum)
// }

// ############ 6
// find the star this type
// simple output
// **
// ***
// ****
// var num = 4
// var str = ""
// for(var i = 1;i<=num;i++){
//     for(var j = 1;j<=i;j++){
// str = str+"*"
//     }
//     str = str+"\n"
// }
// console.log(str)

// ######## 7
// find the this type
// simple output
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
// var num = 4
// var k = 1
// str = ""
// for(var i =1;i<=num;i++){
//     for(var j = 1;j<=num;j++){
//         str = str+k++ +" "
//     }
//     str = str+"\n"
// }
// console.log(str)

// ###########  8
// find the this type

// * * * * *
// *
// *
// *
// *

// var N = 5
// var str = ""
// for(var i = 1;i<=N;i++){
//     for(var j= 1;j<=N;j++){
//         if(j===1 || i===1){

//             str = str +" *"
//         }
//     }
//     console.log(str)
//     str= ""
// }

// this type of output
// ______
// ******
// ______
// ******
// ______
// ******

// var n = 6
// for(var i = 0; i < n;i++) {
//     var s = ""
//     for(var j = 0; j < n; j++) {
//         if(i % 2 === 0) {
//             s += "_"
//         } else {
//             s += "*"
//         }
//     }
//     console.log(s)
// }

// var N = 6
// for(var i =0;i<N;i++){
//     var str = ""
//     for(var j= 0;j<N;j++){
//         if(i%2==0){

//             str =str+"_"
//         }
//         else{
//             str= str+"*"
//         }
//     }
//     console.log(str)
// }

// this L type of print
// *
// *
// *
// *
// * * * * *

// var N = 5
// var str = ""
// for(var i = 1;i<=N;i++){
//     for(var j= 1;j<=N;j++){
//         if(j===1 || i===5){

//             str = str +" *"
//         }
//     }
//     console.log(str)
//     str= ""
// }

// how to reverse the Number
// var num = 123456789
// var reverse= (num.toString().split('').reverse().join(''))
// parseInt(num.toString().split('').reverse().join(''));
// console.log(reverse)

// how to reverse string

// var str = "abcdefg"
// var string = str.split('').reverse().join('')
// console.log(string)

// #######  8

// print the Array in this type
// output
// 1
// 2
// 3
// 4
// 5

// var arr = [1,2,3,4,5]
// for(var i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }

// ####### 9
// Reverse Array Traversal
// input

// 1 3 2 4 5

// output
// 5 4 2 3 1

var arr =[1,3,2,4,5]
arr.sort((a,b)=>a-b)
var str = ""
for(var i =arr.length-1;i>=0;i--){
    str = str+arr[i]+" "
}
console.log(str)

// ########## 10
// output = 5
// find the largest arr in number
var arr = [5,6,8,4,6,9]
for(var i = 0;i<arr.length;i++){
    if(arr[0]<arr[i]){
        arr[0]=arr[i]
    }
}
console.log(arr[0])

// ##########  11
// find the minimum of arr of number

// output= 1
var arr= [1,2,3,4,5]
for(var i =0;i<arr.length;i++){
    if(arr[0]>arr[i]){
        arr[0]=arr[i]
    }
}
console.log(arr[0])

// ######### 12
// find the even Number in Array
// input= [1,2,3,4,5]
// output-
// 2
// 4

// arr = [1, 2, 3, 4, 5];
// for (var i = 0; i<arr.length; i++) {
//   var res = arr[i];
//   if (res% 2 === 0) {
//     console.log(res);
//   }
// }

// ############# 13

// find the odd Number in Array
// input -[1,2,3,4,5]
// output
// 1
// 3
// 5

// arr = [1, 2, 3, 4, 5];
// for (var i = 0; i<arr.length; i++) {
//   var res = arr[i];
//   if (res% 2 === 1) {
//     console.log(res);
//   }
// }

// fin the last element in the name
// var name = "imran"
// for(var i = 0;i<name.length;i++){
//     var bag = ""
//     bag= bag+name[i]
// }
// console.log(bag)

// Remove the chrecter form the String
// var name = "imrankhan"
// var res = ""
// for(var i =0;i,name.length;i++){
//     if(name[i]=="a"){
//         continue;
//     }
//     res= res+name[i]
// }
// console.log(res)

// otherways###
// var name= "imran"
// var res = ""
// for(var i = 0;i<name.length;i++) {
//     if(i==2){
//         res= res+"k"
//     }else{
//     res =res+name[i]
// }
// }
// console.log(res)

// #######
// count all those name the name start (a,A)

// var name= ["varun","imran","ankush","Ankur","ram","aman"]
// var count = 0
// for(var i = 0;i<name.length;i++){
//     var current_name=name[i]
//     if(current_name[0]=="a" || current_name[0]=="A"){

//         count++;
//         console.log(current_name)
//     }
// }
// console.log(count)

// #######
// count the all name check in which preented in the (a,A)
// var name= ["varun","imran","ankush","Ankur","ram","aman"]
// var count = 0
// for(var i = 0;i<name.length;i++){
//     var current_name=name[i]
//     for(var j = 0;j<name.length;j++){

//         if(current_name[j]=="a" || current_name[j]=="A"){

//             count++;
//             console.log(current_name)
//     }
//     }
// }
// console.log(count)

// #######    14
// 1. Given a string count the number of words in that string
//2. Given a string in lower case convert it to upper case
//3. Given an array of string count the overall total number of characters
//4. Given a character in lower case print the upper case character
//5. Given an array of numbers find the average of all the even numbers

// 1. Given a string count the number of words in that string
// var name = ["imran","aman","khan"]
// var count = 0
// for(var i = 0;i<name.length;i++){
//     count= count+name[i].length
// }
// console.log(count)

//4. Given a character in lower case print the upper case character
//2. Given a string in lower case convert it to upper case
// var name = "masai"
// var lower = "abcdefghigklmnopqrstuvwxyz"
// var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// var bag = ""
// for(var i = 0;i<name.length;i++){
//     for(var j= 0;j<lower.length;j++){
//         if(name[i]==lower[j]){
//             bag= bag+upper[j]
//         }
//     }
// }
// console.log(bag)

// #############
// this another way converts in the upper to lower and lower to upper

var str = "HeLLoW"
var res=""
  for(var i = 0;i<str.length;i++){
      var k= str[i]

    if(str[i]==str[i].toLowerCase()){
        // console.log(str[i])
        res+=str[i].toUpperCase()
    }
    else{
        res+=str[i].toLowerCase()
    }
  }
console.log(res)


// try again same Question

// var str = "ImRaN khan"
// var res = ""
// for(var i = 0;i<str.length;i++){
//     var k = str[i]
//     if(str[i]==str[i].toLowerCase()){
//         res= res+str[i].toUpperCase()
//     }else{
//         res= res+str[i].toLowerCase()
//     }
// }
// console.log(res)

// ##########
//3. Given an array of string count the overall total number of characters
// var str = ["imran","ankush","aman","varun"]
// var count = 0
// for(var i = 0;i<str.length;i++){
//     count = count+str[i].length
// }
// console.log(count)

// ##########
//5. Given an array of numbers find the average of all the even numbers
// var arr = [1,2,3,4,5,6,7,8,9]
// var sum = 0
// count = 0
// for(var i = 0;i<arr.length;i++){
// var res= arr[i]
//     if(res%2==0){
//         sum= sum+arr[i]
// count++;
// }
// }
// console.log("avg",sum/count)

// var arr = [1,4,5,7,8,8,9]
// var sum =0
// var res= []
// for(var i = 0;i<arr.length;i++){
//     sum = sum+arr[i]
//     res.push(sum)
// }
// console.log(res.join(" "))

// ############
// check Palindrome "Yes" and "No"
// var res = []
// str = "aman"
// for(var i = str.length-1;i>=0;i--){
//     res.push(str[i])
//     console.log(res)
// }
// for(var i= 0;i<str.length;i++){

// if(str[i] != res[i]) {
// console.log("no")
// return
// }
// console.log("yes")
// break
//     }
//     console.log("yes")
// }

// sort check palindrome

var str = "mama"
var rev = str.split("").reverse().join("")

if(rev == str) console.log("yes")
else console.log("no")

// #######
// check Palindrome "Yes" and "No"

// var res = []
// str = "mama"
// for(var i = str.length-1;i>=0;i--){
//     res.push(str[i])
// }
// for(var i= 0;i<str.length;i++){
//     if(str[i] != res[i]){

// console.log("No")
// return;
//     }
// }
// console.log("Yes")

// how to check the Get in the function
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// console.log(fruits.get("apples"))

// How to check the Set in function
// var str =new Set([1,2,3,,4,5])
// console.log(str.has(3))

// this Question start on the right to 3index and left 1 index sum
// var arr=[1,3,5,7,9]

// var res=arr.sort((a,b)=>a-b)
//   var sum=0;
//   var sum1=0
//  for(let i=0;i<res.length-1;i++){
//      sum+=res[i]
//  }
//   for(let i=1;i<res.length;i++){
//      sum1+=res[i]
//  }
// console.log(sum,sum1)

// var arr= [1, 2, 1, 3, 4, 4, 5, 2, 3]

// arr.sort((a,b)=>a-b)
// for(var i = 0;i<arr.length;i+=2){
//     if(arr[i]!=arr[i+1] && arr[i]!=arr[i-1] ){
//         console.log(arr[i])
//         break;
//     }
// }
// var n= 5
// var obj = {}
// for(var i = 0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
//     }else{
//         obj[arr[i]]=1
//     }
// }
// for(var key in obj){
//     if(obj[key]==1){
//         console.log(key)
//     }
// }

// ######
// Binary Matrix

// for(var i = 0;i<N;i++){
//     var res = ""
//     for(var j = 0;j<M;j++){
//         if(matrix[i][j]==0){
//             res+=1+" "
//         }else{
//             res+=0+" "
//         }

//     }
//     console.log(res)
// }

// how to check the vovel true and false

var str = "aaman"
var vovel = true
for(var i = 0;i<str.length;i++){
    var res = str[i]
    if(res=="a" || res=="e" || res=="i" || res=="o" || res=="u"){
        var vovel = false
        break

    }
}
console.log(vovel)

// #########
// Vowel & Consonant Count
var count = 0
var str = "ankush"
for(var i = 0;i<str.length;i++){
    var res = str[i]
    if(res=="a" || res=="e" || res=="i" || res=="o" || res=="u"){
        count++
    }

}
console.log(count,str.length-count)

// check palindrome in two pointer "yes and "No
// var num = "aman"
// var i = 0
// var j = num.length-1
// is_palindrome = true
// while(i<num.length && j>=0){
//     if(num[i]!=num[j]){
//         is_palindrome=false
//         break
//     }
//     i++
//     j--
// }
// if(is_palindrome){
//     console.log("yes")
// }else{
//     console.log("No")
// }

// var name={
//     firstname:"Imran",
//     lastname:"khan"
// }
// const printFullname=function(city,state){
//     console.log(this.firstname,this.lastname,city,state)
// }
// printFullname.call(name,"delhi","Haryana")
// printFullname.apply(name,["Gurgaon","mumbai"])
// var x = printFullname.bind(name, "delhi", "haryana");
// x()

// var res = [550,240,84,159,80,160,252]
// var sum = 0
// elem=7
// for(var i = 0;i<elem.length;i++){
//     if(elem[i]==1){
//         sum= sum+res[i]
//     }
// }
// console.log(sum)

// Create a function to check if a number is Prime or Not

// var num= 19
// var isPrime= true
// for(var i = 2;i<num;i++){
//     if(num%i===0){
//     var isPrime=false
//     }
// }
// if(isPrime){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

// other way prime check

// function isPrime(num){
//     var res = 0
//     for(var i = 1;i<=num;i++){
//         if(num%i==0){
//             res++
//         }
//     }
//     if(res==2){
//         return true;
//     }else{
//         return false
//     }
// }

// console.log(isPrime(19))

// Use the above function to print the Primes from 2 to a given limit
// function isPrime(num){
//     var res = 0
//     for(var i = 1;i<=num;i++){
//         if(num%i==0){
//             res++;
//         }
//     }if(res==2){
//         console.log(num+" prime")
//     }
// }

// var limit = 100
// for(var i = 2;i<limit;i++){
//     isPrime(i)

// adding this line to find the only prime number
// for(var i = 1;i<limit;i++){
//  var p =   isPrime(i)
//  if(p){
//      console.log(i)
//  }
// }
// }

// Use the same function to print Non-Primes from 2 to a given limit
// function isPrime(num){
//     var res = 0
//     for(var i = 1;i<=num;i++){
//         if(num%i==0){
//             res++
//         }
//     }
// if(res==2){
// console.log(num+" prime")
// return true
// }else{
// console.log(num+" Non-prime")
//         return false
//     }
// }

// var limit = 100

// adding this line to find the only non-prime number
// for(var i = 1;i<limit;i++){
//  var p =   isPrime(i)
//  if(!p){
//      console.log(i)
//  }
// }

// Write a function to check if the char is a small case or not
// function isSmall_case(char){
//     var lower = "abcdefghijklmnopqrstuvwxyz"
//     for(var i = 0;i<lower.length;i++){
//         if(char==lower[i]){
//           return true
//         }
//     }
//     return false
// }
// console.log(isSmall_case("S"))

// Write a function to replace spaces in a given string with -

// function replace(input){
//     var res = ""
//     for(var i = 0;i<input.length;i++){
// if the input string has given space(" ") and given the (-)
//         if(input[i]==" "){
//             res = res+"-"
//         }else{
//             res = res+input[i]
//         }
//     }
//     return res
// }
// console.log(replace("A school show"))
// console.log(replace("A B C D E"))

// prime check

// var num = 17
// var isPrime= true
// for(var i = 2;i<num;i++) {
// if(num%2==0){
//     var isPrime= false
// }
// }
// if(isPrime){
//     console.log("yes")
// }else{
//     console.log("No")
// }

// basic check function

// function add(x){
//     var y = x+x
//     return y
// }
// var output = add(2,3)
// console.log("output is" ,output)

// Problem
// Write a function named addNumbers which takes two numbers as input and return their sum
// Use the function to calculate the sum of given three numbers
// function sum(a,b) {
// return a+b
// console.log(a+b)
// }
// console.log(sum(4,5))
// sum(4,5)

// Problem
// Write code to find the absolute difference of two numbers
// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value .

// function dif(a,b) {
// this fuction always give the positive value
//         return Math.abs(a-b);
// }
// console.log(dif(4,8))

// Problem
// Write a function isOdd which returns a boolean value based the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

// function isOdd(num) {
//         if(num % 2 == 1) {
//                 return true
//         }
//         return false
// }
// console.log(isOdd(5))

// Problem
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
// var arr = [1,2,3,4,5]
// function arraySum(arr) {
//         var s = 0
//         for(var i = 0; i < arr.length; i++) {
//                 s += arr[i]
//         }
//         return s / arr.length
// }
// if(arr.length == 0) {
//         console.log(0)
// } else {
//         console.log(arraySum(arr))
// }

// Problem
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input
// ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output
// ["ma", "sa", "i", "sch", "ool"]
// var str = ["MA", "SA", "I", "SCH", "OOL"]
// function makeLower(str) {
//         // var n = []
//         for(var i = 0; i < str.length; i++) {
//         //        n.push( str[i].toLowerCase())
//         str[i] = str[i].toLowerCase()

//         }
//         // return n
//         return str
// }
// console.log(makeLower(str))

// Problem
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

// var s = "Test"
// function swap(s) {
//         s = s.split("")
//         for(var i = 0; i < s.length;i++) {
//                 if(s[i] == s[i].toLowerCase()) {
//                         s[i] = s[i].toUpperCase()
//                 } else {
//                         s[i] = s[i].toLowerCase()
//                 }
//         }
//         return s.join("")
// }
// console.log(swap(s))

// var arr = [1,2,3,4,4]

// function check(arr){
//        var  sum = 0;
//         for (var i = 0;i<arr.length;i++){
//             sum += arr[i];
//         }
//         if (sum % 2 == 0){
//             return arr.length;
//         }
//         return sum;
//     }
//     console.log(check(arr))

// function check(){
//         sum = 0;
//         for (i = 1;i<=10;i++){
//             if (i % 2 == 0){
//                 return sum;
//             }else{
//                 sum += i;
//             }
//         }
//         return sum
//     }
// //     console.log(check())

//     function check(){
//         a = 2;
//         b = 1;
//         for (i = 2;i<4;i++){
//             if (i % 2 == 0){
//                 a += i;
//             }else{
//                 b += i;
//             }
//         }
//         if (a > b){
//             return true;
//         }else{
//             return false;
//         }
//     }
//     console.log(check())

// var arr = [1,3,4,52,7,89,8]
// arr.sort((a, b) => a - b)
//         console.log(arr.join(" "))

// normal bubble sort 👍👍👍👍👍👍👍👍

var arr = [3, 5, 0, 9, 8]
var N = 5
        for(var i = 0; i < N; i++){
             for(var j = 0 ; j < N-i-1 ; j++){
                  if(arr[j] > arr[j + 1]){
                  var temp = arr[j]
                  arr[j] = arr[j + 1]
                  arr[j + 1] = temp
                  }
             }
        }
        console.log(arr.join(" "))

// find the middle elemenet in the Array👍👍👍👍👍👍👍👍

// var arr = [8,4,6]
// arr = arr.sort((a,b)=>a-b)
// console.log(arr[1])

// // Recursive Bubble sort 👍👍👍👍👍👍👍👍
// var arr = [64, 34, 25, 12, 22, 11, 90 ]
// // function bubbleSort(arr, n){
// var n= 7

//     // Base case
//     if (n == 1)
//         return;

//     // One pass of bubble
//     // sort. After this pass,
//     // the largest element
//     // is moved (or bubbled)
//     // to end.

//     for (var i = 0; i < n - 1; i++)
//         if (arr[i] > arr[i + 1])
//         {

//             // swap arr[i], arr[i+1]
//             var temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }

//     // Largest element is fixed,
//     // recur for remaining array
//     (arr, n - 1);

// console.log(arr,n-1)

// function fib(N){
// This case frist on minus(-) in the n-1 and return back of the n-2 in the this condition apply on the base case basic follow conditions,
//         if (N == 0 || N == 1){
//                 return N
//         }
//         return fib(N-1) + fib(N-2);
// }
// console.log(fib(5))

// console.log(fact(5))
// function fact(n){
//     if(n === 0) {
//         return 1;
//     }
//     if(n < 0) {
//         return 0;
//     }
//     return fact(n-1) + fact(n-2) + fact(n-3)
// }

// console.log(rec(7))
// function rec(n){
//         if(n==0)
//         return 1
//         if(n<0)
//         return 0
//         return rec(n-1)+rec(n-3)+rec(n-5)
//         }

// console.log(profit(12))
// function profit(n){
//         if(n==0){

//         return 1
//         }
//         if(n<0){
//             return 0
//         }
//             return profit(n-4)+profit(n-8)
//     }

// function factorial(n){
//     if (n == 0 || n == 1)
// return 1
//     return n * factorial(n-1)
// }
// console.log(factorial(6))

// Object👍👍👍👍👍

//        1. Given an array find the unique items in the array

var arr = ["rahul", "mohan", "suraj", "rahul", "mohan","chirag"];
var unique = {}
for(var i = 0;i<arr.length;i++){
        unique[arr[i]]="present"

}

console.log(unique)
console.log(Object.keys(unique))

// Logic 2👍👍

var res = ["rahul", "mohan", "suraj", "rahul", "mohan","chirag"];

var unique = []
for(var i = 0;i<res.length;i++){
        var count = 0
        for(var j = 0;j<unique.length;j++){
                if(res[i]==unique[j]){
                        count++
                }
        }
        if(count==0){
                unique.push(res[i])
        }
}
console.log(unique)

// 2. Given a string print the number of times each character appears👍👍👍

var name = "masai"
var details = {}
for(var i = 0;i<name.length;i++){
    //loop run on the name length
    var char = name[i]
    //frist char present on the string starting
    if(details[char]==undefined){
        //frst time char is present on not if the present frist time print console
    details[char]=1
}
else{
    details[char] =details[char]+1
    //if the char is again come and print second time
}
}
console.log(details)

// Even evenPalindrome check Yes and No 👍👍👍👍👍👍👍👍

// function evenPalindrome(N,str){
//         N= 7
//         str ='abcdcfa'
//         var even_char = ""
//         for(var i =0;i<str.length;i++){
//                 if(i%2==0){
//                         even_char+=str[i]

//                 }
//         }
//         var rev = ""
//         for(var j = even_char.length-1;j>=0;j--){
//                 rev+=even_char[j]
//         }
//         if(even_char==rev){
//                 console.log("Yes")
//         }
//         else{
//                 console.log("No")
//         }
// }
// evenPalindrome()

// function oddPalindrome(N,str){
//         N= 7
//         str ='abcdcfa'
//         var even_char = ""
//         for(var i =0;i<str.length;i++){
//                 if(i%2==1){
//                         even_char+=str[i]

//                 }
//         }
//         var rev = ""
//         for(var j = even_char.length-1;j>=0;j--){
//                 rev+=even_char[j]
//         }
//         if(even_char==rev){
//                 console.log("Yes")
//         }
//         else{
//                 console.log("No")
//         }
// }
// oddPalindrome()

// Print this pattren 👍👍👍👍👍👍👍

// *       *
// *       *
// *       *
// *       *
// * * * * *

// function patternPrintingII(n) {
//         // Write code here
//         for(var i = 0; i < n; i++) {
//                 // running loop N tak
//       var ans = ""
//       for(var j = 0;j < n; j++) {
//         //       j runing loop N tak
//         if(i == n-1) {
//                 // evey time check if i==4 and print *
//           ans += "* "
//         } else if (j == 0 || j == n-1) {
//                 // evey time check if j ==0 and 4 and than go else condition
//           ans += "* "
//         } else {
//           ans += "  "
//         }
//       }
//       console.log(ans)
//     }
//     }
// patternPrintingII(5)

// In the first sample test case, the indexes with the value 1 are2 3 4 5. Therefore, the required sum becomes2 + 3 + 4 + 5 = 14

// In the second sample test case, the indexes with the value 1 are2 4. Therefore, the required sum becomes2 + 4 = 6
// // this side 0 consider as the 0 and 1 consider as increase order number

// var arr = [0,1,1,1,1]
// var sum = 0
// for(var i = 0;i<arr.length;i++){
//         if(arr[i]=="1"){
// sum = sum+i+1
//         }
// }
// console.log(sum)

// Even sumsub Array👍👍👍👍👍👍
// 1
// 1 2
// 1 2 3
// 2
// 2 3
// 3
// this side making 2 sum sab Array
// var arr = [1,2,3]
// var N = 3
// var count=0
// for(var i = 0;i<N;i++){
//         sum = 0
//         for(var j = i;j<N;j++){

//                 sum= sum+arr[j]
//                 if(sum%2===0){
//                         count++
//                 }
//         }
// }
// console.log(count)

// Strongly Typed Password👍👍👍👍👍👍👍

// var N = 4

// var arr = ["test123", "new@t", "mon*y", "nrupul"]
// var temp =""
// for(var i =0;i<N;i++){
// var count =0
// for(var j=0;j<arr[i].length;j++){
//         if(arr[i][j]=='@' || arr[i][j]=='$' ||arr[i][j]=='#' ||arr[i][j]=='*'){
//                 count++
// }
// }
// if(count){
//         temp+="strong "
// }
// else{
//         temp+="week "
// }
// }
// console.log(temp)

// Find the pairt of the sum is diviible of the value stored in the M ‼️❗❗❗❗
// var count = 0
// var N = 5
// var M = 4
// var arr = [1,3,4,5,3]
// for(var i = 0;i<arr.length;i++){
//         for(var j =i+1;j<arr.length;j++){
//                 if((arr[i]+arr[j])%M==0){
//                         count++
//                 }
//         }
// }
// console.log(count)

// find the Odd product in the Columns ❗❗❗❗❗❗
// var M = 3
// var arr = [[1,2,3],[4,5,6],[7,8,9]]
// for(var i =0;i<M;i++){
//         var res = 1
//         for(var j =0;j<arr.length;j++){
// if(arr[j][i]%2==1){
//         res = res*arr[j][i]
// }
//         }
//         console.log(res)
// }

// function prime(prm){
//         var count = 0;
//           for(i=0;i<=prm;i++){
//           if(prm%i==0){
//           count++
//           }
//             }
//           if(count==2){
//           return true;

//           }
//           else{
//           return false;
//           }
//         }

//         function matrixNonPrimeCheck(N, M, arr) {

//           var count1 =0;
//           for (var i=0;i<N;i++){
//           for(var j=0;j<M;j++){
//           var res = prime(arr[i][j])
//             if(res==false){
//             count1++
//             }
//           }
//           }
//           console.log(count1)
//         }

// JS-XIV Arrays Multidimensional❗❗❗❗❗❗

// Your first 2D Array Problem

// var arr = [[1,2],[3,4],[5,6]]
// for(var i = 0;i<arr.length;i++){
// console.log(arr[i].join(" "))
// }

// Sum of Rows ❗❗❗❗❗

// var arr = [[1,2],[3,4],[5,6]]
// var M = 2
// var N = 3
// for(var i = 0;i<N;i++){
//         var sum = 0
//         for(var j = 0;j<M;j++){
//                 sum = sum +arr[i][j]
//         }
//         console.log(sum);
// }

// sum of colum ❗❗❗❗❗

// var arr = [[1,2],[3,4],[5,6]]
//  var M = 2
//  var N = 3
//  for(var i = 0;i<M;i++){
//          var sum = 0
//          for(var j = 0;j<N;j++){
//                  sum = sum+arr[j][i]
//          }
//          console.log(sum)
//  }

// Sum of Indexes   ❗❗❗❗❗❗

//  var arr = [[1,2],[3,4],[5,6]]
//  var M = 2
//  var N = 3
//  for(var i = 0;i<N;i++){
//          var sum = ""
//          for(var j = 0;j<M;j++){
//                  sum = sum +[i+j]+ " "

//          }
//          console.log(sum);
//  }

// Even Sum in Rows❗❗❗❗❗❗❗

// var arr = [[1,2,3],[4,5,6],[7,8,9]]
// var M = 3
// var N = 3
// for(var i =0;i<N;i++){
//         var sum = 0
//         for(var j = 0;j<M;j++){
//                 if(arr[i][j]%2==0){
//                         sum = sum+arr[i][j]

//                 }
//         }
//         console.log(sum);
// }

// Odd Sum in Rows ❗❗❗❗❗❗

// var arr = [[1,2,3],[4,5,6],[7,8,9]]
// var M = 3
// var N = 3

// for(var i =0;i<N;i++){
//         var sum = 0
//         for(var j =0;j<M;j++){
//                 if(arr[i][j]%2==1){
//                         sum = sum +arr[i][j]
//                 }
//         }
//         console.log(sum)
// }

// var arr = [[1,2,3],[4,5,6],[7,8,9]]

// for(var i = 0;i<arr.length;i++){
//         for(var j = 0;j<arr.length;j++){
//                 console.log(arr[i][j]+" "+i+" "+j)
//                 // console.log(arr[i][j])
//         }
// }

// var arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// rows = 4
// cols = 3
// for (var j = 0;j < cols;j++) {
//     for (var i = 0;i < rows;i++) {
//         console.log(arr[i][j])
//     }
// }

// function twoArrayAndSum(n, m, arr, s){
//         //write code here

//         var count = 0

//         for (var i = 0;i < n;i++) {
//             for (var j = 0;j <= m - 3;j++) {
//                 var sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2])
//                 if (sum == s) {
//                     count ++
//                 }
//             }
//         }

//         for (var j = 0;j < m;j++) {
//             for (var i = 0;i <= n - 3;i++) {
//                 var sum = (arr[i][j] + arr[i + 1][j] + arr[i + 2][j])
//                 if (sum == s) {
//                     count ++
//                 }
//             }
//         }

//         for (var i = 0;i <= n - 3;i++) {
//             for (var j = 0;j <= m - 3;j++) {
//                 var sum = arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2]
//                 if (sum == s) {
//                     count ++
//                 }
//             }
//         }

//         for (var i = 0;i <= n - 3;i++) {
//             for (var j = 2;j < m;j++) {
//                 var sum = arr[i][j] + arr[i + 1][j - 1] + arr[i + 2][j - 2]
//                 if (sum == s) {
//                     count ++
//                 }
//             }
//         }
//         console.log(count)
//     }

// the longest sub Array incresing ❗❗❗❗❗

// // var arr = [1, 2, 1, 2, 3, 1]
// var arr = [1, 2, 3, 4, 1, 2]
// var N = 6
// var ans = 1
// for(var i =0;i<N;i++){
//         var count = 1
//         for(var j =i+1;j<N;j++){
//                 if(arr[j]>arr[j-1]){
//                         count++
//                 }else{
//                         break;
//                 }
//                 if(count>ans){
//                         ans = count

//                 }
//         }
// }
// console.log(ans)

// Longest Increasing Subarray Ended
// Description

// Given an arrayarrofnintegers.

// You need to find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the number of elements in the array A.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 100).

// Output
// For each test case, print the answer: The length of the longest subarray.

// Sample Input 1

// 2
// 2
// 1 1
// 6
// 1 2 1 2 3 1
// Sample Output 1

// 1
// 3
// Hint

// For Sample Input 1:-

// Subarrays which are strictly increasing are [1] and [1]. So maximum size of sub-array is 1.

// For Sample Input 2:-

// Subarrays which are strictly increasing are [1,2] , [1,2,3] and [1]. So maximum size of sub-array ([1,2,3]) is 3. So answer is 3.

// var arr = [1,2,1,2,1]
//  var main_count = 1
//  var sub_count = 1
// var N = 5
// for(var i = 1;i<N;i++){
//         if(arr[i]>arr[i-1]){
//                 sub_count++
//                 if(main_count<sub_count){
//                         main_count=sub_count
//                 }
//         }
//         else{
//                 sub_count=1
//         }

// }
// console.log(main_count);

// palindrome longest ❗❗❗❗❗❗

var str = "thisracecarisgood"
// take an blank arr
var res = []
for(var i = 0;i<str.length;i++){
        var a = ""
        for(var j = i;j<str.length;j++){
                a = a+str[j]
                var rev = a.split("").reverse().join("")
                if(a==rev){

                        res.push(a.length)
                }
        }
}
console.log(Math.max(...res))

// var str = "a"

// var ans = ""  // to create our ans
// var count = 1  // for count number of time present any charactor
// for(var i = 1; i < str.length; i++) {  // loop
//     if(str[i] == str[i-1]) {  // check if present element is equal to previous element
//         count++  // the count++
//     } else {
//         ans += str[i-1] + count  // we will add our charactor and number of time present into answer
//         count = 1  // change value to 1 again
//     }
// }
// if(count > 1 || str[i-1] != str[i-2]) {  // it will check if our count is > 1 or last character != 2nd last charactor
//     ans += str[i-1] + count  // add last character and count into answer
// }
// console.log(ans)

// for(var i = 0;i<=1000;i++){
//     var val = 80;
//     var curr = i;
//     if(curr>150){
//     val =val + (curr-150)*10;
//     curr = 150;
// }
// if(curr>50){
//     val = val + (curr-50)*5;
//     curr = 50;
// }
// if(curr>0){
//     val = val +(curr-0)*3;
//     curr = 0
// }
// if(val == n){
//             console.log(i);

// }

// }

// <>

// // Javascript program to find Majority❗❗❗❗❗❗
// // element in an array

// // Function to find Majority element
// // in an array
// function findMajority(arr, n)
// {
// 	let maxCount = 0;
// 	let index = -1; // sentinels

// 	for(let i = 0; i < n; i++)
// 	{
// 		let count = 0;
// 		for(let j = 0; j < n; j++)
// 		{
// 			if (arr[i] == arr[j])
// 				count++;
// 		}

// 		// Update maxCount if count of
// 		// current element is greater
// 		if (count > maxCount)
// 		{
// 			maxCount = count;
// 			index = i;
// 		}
// 	}

// 	// If maxCount is greater than n/2
// 	// return the corresponding element
// 	if (maxCount > n / 2)
// 		document.write(arr[index]);
// 	else
// 		document.write("No Majority Element");
// }

// // Driver code
// let arr = [ 1, 1, 2, 1, 3, 5, 1 ];
// let n = arr.length;

// // Function calling
// findMajority(arr, n);




//  var N = 6
// var arr = [1, 1, 1, 1, 2, 3]
//  var maxcount = 0
// for(var i = 0;i<arr.length;i++){
//     var count = 0
//     for(var j = 0;j<arr.length;j++){
//         if(arr[i]==arr[j])
//         count++
//     }
//     if(count>maxcount){
//         maxcount=count
//        var res = 0
//     }
// }
// if(maxcount>N/2){
//     console.log(arr[0])
// }else{
//     console.log(-1)
// }

// var n =arr.length

//   for(var i = 0;i<n;i++){
//       if(day == arr[i]){
//           var d = Math.abs((N+(i))%7)
//           console.log(arr[d])
//       }
//   }

// nput: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
//   Output: 4 // x (or 2) occurs 4 times in arr[]

// // find the arr is is equal in k ❗❗❗❗❗❗
// var arr = [1, 1, 2, 2, 2, 2, 3]
// var k =2
// var res = 0
// for(var i =0;i<arr.length;i++){
//         if(k==arr[i]){
//                 res++
//         }
// }
// console.log(res)

// find the the index of the same in k ❗❗❗❗❗❗❗

// var arr = [3,4,7,8,2,9,0,5]
// var k = 5
// for(var i =0;i,arr.length;i++){
//         if(arr[i]==k){
//                 console.log(i)
//         }

// }

// array of product /❗❗❗❗❗❗

// var arr = [1,2,3,4,5]

//         var Product = 1;
//      for (var i = 0; i < arr.length; i++) {
//          Product = Product* arr[i]

//          console.log(Product)
//         }
//    console.log(Product)

// // Find the Arrayof the product in  ❗❗❗❗❗❗❗❗
// // i = 0 ==> 2*3*4*5 = 120

// // i = 1 ==> 1*3*4*5 = 60

// // i = 3 ==> 1*2*4*5 = 40

// // i = 4 ==> 1*2*3*5 = 30

// // i = 5 ==> 1*2*3*4 = 24

// var arr = [1,2,3,4,5]
// var product = 1
// for(var i =0;i<arr.length;i++){
//         product= product*arr[i]
//         // console.log(product)
// }
// var str = ""
// for(var i =0;i<arr.length;i++){
//         str= str+product/arr[i]+" "

// }
// console.log(str)

// find the index of present on the value of k ❗❗❗❗❗❗
// ❗❗❗❗

// function findIndex(arr,k){
// for(var i =0;i<arr.length;i++){
//         if(arr[i]==k){
//                 return i
//         }
//         else if(arr[i]>k){
//                 return i
//         }
// }
// return n

// }
// let arr = [ 1, 3, 5, 6 ];
// // let n = arr.length;
// let k = 5;
// console.log(findIndex(arr,k))

//

// function Remove(nums){
//         let count = 0;
//         // Loop for all the elements in the array
//         for (let i = 0; i < nums.length; i++) {
//                 // If the current element is equal to the next element, we skip
//                 if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
//                         continue;
//                 }
//                 // We will update the array in place
//                 nums[count] = nums[i];
//                 count++;
//         }
//         return count;
// }
// var nums  = [1,3,4,6,7,8,2,3,6,4,5]
// console.log(Remove(nums))

// Minimum in sorted & rotated array❗❗❗❗
// Liner search

// var arr = [1,3,5,6,7,5,8]
// var min = arr[0]
// for(var i =0;i<arr.length;i++){
// if(min>arr[i])
// min = arr[i]
// }
// console.log(min)

// Find the Unique in masai ❗❗❗❗❗

var str ="masai"
Object = {}
for(var i =0;i<str.length;i++){
        var char = str[i]
        if(Object[char]==undefined){
                Object[char]=1
        }else{

                Object[char]++
        }
}
var flage = false
for(key in Object){

        if(Object[key]!=1){
                flage= true
                if(!flage){
                        console.log("Unique")
                }else{
                        console.log("No");
                }

        }
}

// Smaller Element Smaller Neighbour Element❗❗❗❗❗

// // function Element(n,arr){
//         var arr = [39, 27, 11, 4, 24, 32, 32, 1]

//         var ans = []
//         for(var i=0;i<arr.length;i++){
//             for(var j =i-1;j>=0;j--){
//                 if(arr[j]<arr[i]){
//                     ans.push(arr[j])
//                     break;
//                 }
//             }
//             if(j==-1){
//                 ans.push(-1)
//             }
//         }
//         console.log(ans.join(" "))
// //     }

// Next greather Element ❗❗❗❗❗❗
// increasing order
// // function Greater(n,arr){
//         var arr = [1, 3, 2, 4]
//         var ans = []
//         for(var i =0;i<arr.length;i++){
//             var next = -1
//             for(var j = i+1;j<arr.length;j++){
//                 if(arr[i]<arr[j]){
//                     next = arr[j]
//                     break;
//                 }
//             }
//             // console.log(arr[i]+" "+ next)
//             // console.log(next)f
//             ans.push(next)
//         }
//         console.log(ans.join(" "))

// //     }

// Count number of occurrences ❗❗❗❗❗❗
// liner search algo // O(logn)

// var arr = [3, 4, 5,8, 8, 9, 2, 4];
// var k = 8;
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (k == arr[i]) {
//     count++;
//   }
// }
// console.log(count)

// Number of subarrays having sum exactly equal to k ❗❗❗❗❗

// var arr = [4, 5, 6, 6, 8, 6, 4, 9];
// var k = 10;
// count = 0;
// for (var i = 0; i < arr.length; i++) {
//   var sum = 0;
//   for (var j = i; j < arr.length; j++) {
//     sum = sum + arr[j];
//     if (sum == k) {
//       count++;
//     }
//   }
// }
// console.log(count);

// find the Unique of string ❗❗❗❗❗❗

// var str = "masai"
// var obj = {}

// for(var i =0;i<str.length;i++){
// let char = str[i]
// if(obj[char]==undefined){
//         obj[char]=1
// }
// else{
//         obj[char]++
// }
// }
// var flage =  false
// for(key in obj){
//         if(obj[key]!==1){
//                 flage=true
//                 if(!flage){
//                         console.log("Unique");
//                 }
//                 else{
//                         console.log("No");
//                 }
//                        }

// }

// find the Binary in recursive❗❗❗❗❗❗❗❗

// function binary(n,res=""){
//         // this side res mensa of "" and evely time increse the value and go to next element on the add.

//         if(n==0){
//                 return res
//         }
//         if(n%2==0){
//                 res = "0"+res
//         }
//         if(n%2==1){
//                 res = "1"+res
//         }
//         return binary(Math.floor(n/2),res)
// }
// console.log(binary(15))

// // Anagram how to check in the String ❗❗❗❗❗❗❗❗❗
// var str1 ="anagram"
// var str2 ="nag a ram"
// var x = str1.split("").sort().join(" ").trim()
//  var y = str2.split("").sort().join(" ").trim()
//     if(x==y){
//         console.log("True")
//     }
//     else{
//         console.log("False")
//     }

// // Find the Power of 2 ❗❗❗❗❗❗❗❗❗❗❗

// function  Power(n){
//         var ans  = 1
//         if(n<2){
//                 console.log("false")
//         }
//         for(var i = 0;i<n;i++){
//                 ans = ans*2
//                 if(ans==n){
//                         console.log("true");
//                         break

//                 }
//                 if(ans>n){
//                         console.log("false")
//                        break;
//                 }

//         }
// }
// Power(4)

// // find the Power of three ❗❗❗❗❗❗❗❗❗

// function PowerofThree(n){
//         if(n<=0){
//                 console.log("No")
//         }
//         if(n%3==0){
//                 return PowerofThree(n/3)
//         }
//         if(n==1){
//                 console.log("Yes");
//         }else{
//                 console.log("No");
//         }
// }
// PowerofThree(3)

// // Bubble sort ❗❗❗❗❗❗❗

// var arr = [7,9,4,0,2]
// for(var i =0;i<arr.length;i++){
//         for(var j =0;j<arr.length-i-1;j++){
//                 if(arr[i]>arr[j+1]){
//                         temp = arr[j]
//                         arr[j]=arr[j+1]
//                         arr[j+1]=temp
//                 }
//         }

// }
// console.log(arr

// // find the Odd index in matrix ❗❗❗❗❗❗❗❗

// var mat = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// var N = 4
// var M =3
// for (var i = 0; i < N; i++) {
//   if (i % 2 == 1) {
//     var bag = "";
//     for (var j = 0; j <M; j++) {
//       bag = bag + mat[i][j] + " "
// }
// console.log(bag);
// }
// }

// Array of product ❗❗❗❗❗❗❗❗

// var arr = [8,10,2]
// let n = arr.length;

//   let result = [];
//   let product = 1;
//   for (let i=0;i<n;i++) {
//       result.push(product);
//       product *= arr[i];
//   }

//   product = 1;
//   for (let i=n-1;i>=0;i--) {
//       result[i] *= product;
//       product *= arr[i];
//   }
//   console.log(result)

// two sum ❗❗❗❗❗❗❗

// function check(M,B,arr){
//     var M = 4
//     var B = 9
//     var a = "-1 -1" ;
//      for(var i = 0; i < (M);i++){
//        for(var j = 0; j < M; j++){
//            if(i == j){
//            }else{
//              if(arr[i] + arr[j] == B){
//                a = j + " " + i
//            }
//          }
//        }
//      }
//      console.log(a)
//    }

// // slinding window ❗❗❗❗❗

var arr = [1,2,3,4,5,6,7,8]
var ans = 10
var b = 4
var ans = []
var sum = 0
for(var i =0;i<b;i++){
    sun = sum +arr[i]
}
ans.push(sum)

for(var i =b;i<arr.length;i++){
    sum = sum+arr[i]
    sum = sum-ans[i-b]
    ans.push(sum)

}
console.log(ans)

// // 2 pointer ❗❗❗❗❗
// // this is finding index

var arr = [1,2,3,4,5,6]
var ans = 10
var i =0
var j = arr.length-1
while(i<j){
    sum = arr[i]+arr[j]
    if(sum===ans){
        console.log(i,j)
        break;
    }
    else if(sum<ans){
        i++
    }
    else{
        j--
    }
}

// print every word in next line ❗❗❗❗❗❗

ans = ""
var str = "mohan is good student"
for(var i =0;i<str.length;i++){
  if(str[i]!==" "){
    ans+=str[i]
  }
  else{
    console.log(ans)
    ans=""
  }
}

// function financial(n,arr,arr1){
//     arr1[0]= 1
//     for(var i =1;i<arr.length;i++){
//         arr1[i]=1
//          for (let j = i - 1; (j >= 0) && (n[i] >= n[j]); j--)
//                  arr1[i]++;
//     }
//  console.log(arr.join(" "))
//  }

// 	{

// 	function calculateSpan(arr, n, S)
// 	{

// 		S[0] = 1;

// 		for (let i = 1; i < n; i++) {
// 			S[i] = 1; // Initialize span value

// 			for (let j = i - 1; (j >= 0) && (arr[i] >= arr[j]); j--)
// 				S[i]++;
// 		}
// 	}

// 	function printArray(arr)
// 	{
// 		let result = arr.join(" ");
// 		console.log(result);
// 	}

// 	let arr = [ 10, 4, 5, 90, 120, 80 ];
// 	let n = arr.length;
// 	let S = new Array(n);
// 	S.fill(0);

// 	// Fill the span values in array S[]
// 	calculateSpan(arr, n, S);

// 	// print the calculated span values
// 	printArray(S);

// // remove element
// 	var res = 0
//     for(var i =0;i<nums.length;i++){
//         if(nums[i]!=val){
//             nums[res]=nums[i]
//             res++
//         }
//     }
//     return res

// // subset
// const getAllSubsets =
//   theArray => theArray.reduce(
//     (subsets, value) => subsets.concat(
//       subsets.map(set => [value, ...set])
//     ),
//     [
//       []
//     ]
//   );

// console.log(getAllSubsets([1, 2, 3]));
// min = 1
// max = 100
// console.log(Math.floor(Math.random() * (max - min) + min));

// // missing interger ❗❗❗❗❗❗❗

var arr = [5,3,4,1]

arr.sort((a,b)=>a-b)

for(var i =0;i<arr.length;i++){
    if(arr[i]!=i+1){
        console.log(i+1)
        break;
    }
}

// // Array to String ❗❗❗❗❗❗
// minus value  consider as 0‼️‼️‼️❗❗

var arr = [2, -4, 6, 8, -9]
var str = ""
for(var i =0;i<arr.length;i++){
    if(arr[i] <= 0){
    str += 0
    }
    else{
        str += arr[i]
    }
}
console.log(str)

// // print subString ❗❗❗❗❗

var str ='abcde'
for(var i =0;i<str.length;i++){
  var bag = ""
  for(var j =i;j<str.length;j++){
    bag = bag+str[j]
    console.log(bag)
  }
}

// a
// ab
// abc
// abcd
// abcde
// b
// bc
// bcd
// bcde
// c
// cd
// cde
// d
// de
// e

// // find the substring size ❗❗❗❗❗❗

// var s = "aaa"
// var count = 0
// var arr = []
// for(var i = 0; i < s.length; i++) {
//     var a = ""
//     for(var j = i; j < s.length; j++) {
//         a += s[j]
//         if(!(arr.includes(a))) {
//             count++
//         }
//         arr.push(a)
//     }
// }
// console.log(count)

// // summatry ❗❗❗❗❗‼️❗❗❗
// var n = 4
// hor = true
// for(var i =0;i<n;i++){
//     if(arr[i]== arr[n-1]){
//         hor = true
//     }
//     else{
//         hor = false;
//         break;
//     }
//     n--
// }
// ver = true
// for(var i =0;i<n;i++){
//     if(arr[i]!=arr[n-1]){
//         for(var j =0;j<n;j++){
//             ver = false
//             break
//         }
//         n--
//     }
// }

// if(hor && ver){
//     console.log("Both");

// }
// else if(ver){
//     console.log("vertical");
// }
// else if(hor){

//     console.log("horizontal");
// }
// else{
//     console.log("No");

// }

// find palindome substring❗❗❗❗❗❗

// var str = "thisracecarisgood"
// var res = []
//   for(var i = 0;i<str.length;i++){
//       var temp = ""
//       for(var j = i;j<str.length;j++){
//           temp = temp+str[j]

//           //above substring make

//       var rev = temp.split("").reverse().join("")
//       if(temp==rev){
//           res.push(temp.length)
//       }
//       }
//   }
//       console.log(Math.max(...res))

// // Insertion sort ❗❗❗❗

// function insertion(arr){
// var arr = [3, 0, 2, 5, -1, 4, 1]
// for(var i =1;i<arr.length;i++){
//     var temp = arr[i]
//         var j = i-1
//     while(j>=0 && arr[j]>temp){

//         arr[J+1] =arr[j]
//         j--
//     }
//     arr[j+1] = temp

// }
// return arr
// }
// console.log(insertion([3, 0, 2, 5, -1, 4, 1]))



// // const insertion_Sort = (nums) => {
// //     for (let i = 1; i < nums.length; i++) {
// //       let j = i - 1
// //       let temp = nums[i]
// //       while (j >= 0 && nums[j] > temp) {
// //         nums[j + 1] = nums[j]
// //         j--
// //       }
// //       nums[j+1] = temp
// //     }
// //     return nums
// //   }
// //   console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]).join(" "));

// // subset & Subsequence❗❗❗❗❗

// var s = [1,2,3,4]
// var ans = []
// var cur = 0
// function subset(s,ans,cur){
//     if(ans.length > 0){
//         console.log(ans)
//     }
//     if(s.length == cur){
//         return;
//     }
//     for(var i = cur; i < s.length;i++){
//         ans.push(s[i])
//         subset(s, ans, i+1)
//         ans.pop()
//     }
// }
// subset(s,ans,cur)

// Long common sequence❗❗❗❗❗❗ GFG

// function lcs( X, Y , m , n )
// {
// 	if (m == 0 || n == 0)
// 	return 0;
// 	if (X[m-1] == Y[n-1])
// 	return 1 + lcs(X, Y, m-1, n-1);
// 	else
// 	return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
// }

// /* Utility function to get max of 2 integers */
// function max(a , b)
// {
// 	return (a > b)? a : b;
// }

// 	var s1 = "AGGTAB";
// 	var s2 = "GXTXAYB";

// 	var X=s1;
// 	var Y=s2;
// 	var m = X.length;
// 	var n = Y.length;

// 	console.log("Length of LCS is" + " " +
// 								lcs( X, Y, m, n ) );

// Diirent way Buy Cndies❗❗❗

// var arr = [2,3,6,7]
// var n = 4
// var k = 7
// var ans = []

// function rec(arr,n,k,ans,temp,sum,cur) {
//     if(sum > k) {
//         return
//     }
//     if(sum == k) {
//         ans.push(temp.join(" "))
//     }
//     for(var i = cur; i < n; i++) {
//         temp.push(arr[i])
//         rec(arr,n,k,ans,temp,sum+arr[i],i)
//         temp.pop()
//     }
// }
// rec(arr,n,k,ans,[],0,0)
// console.log(ans.join("\n"))

// ============================================================================================

// var n= 12
// for(var i =1;i<n;i++){
// 	var str = ""
// 	str+="XY"+n
// }
// console.log(str)

// var n = 3
//         var s = ""
//         var count = 1
//         for(var i = 0; i < n; i++) {
//             s += "XY" + count + (count+1)
//             count += 2
//         }
//         console.log(s)

// var n = 3
//         var s = ""
//         var a = ""
//         var count = 1
//         for(var i = 1; i <= n; i++) {
//             a += "@"
//             s += i + a
//         }
//         console.log(s)
// var n = 3
//         var s = ""
//         var a = ""
//         var count = 1
//         for(var i = 1; i <= n; i++) {
//             a += "M"
//             s += a + "+"
//         }
//         console.log(s)

// var n =3
// var sum =1
// for(var i=0;i<n;i++){
// sum= sum+i
// console.log(sum);
// sum= sum+3
// }

// var N =3
// let sum=1
//  for(let i=0;i<N;i++){
//       console.log(sum);
//         sum+=3

//   }

// var n =15
// for(var i =1;i<=15;i++){
// if(i%2==0 && i%4==0){
//     console.log("no")
// }
// if(i%3==0 && i%5==0){
//     console.log("Yes")
// }
// }

// var n =15
// for(var i =0;i<n;i++){
//     if(n%5){
//     }
//     console.log("Hello instead of the number")
//     break
// }

// var n =4
// for(var i =1;i<=n;i++){
// if(i%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")

// }
// }

// var n =10
// for (i=1;i<=n;i++){

//     if (n%i==0)
//     console.log(i)
// }

// var n =5
// for(var i =1;i<=n;i++){
//     if(i*i%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// var n =6
// var str =""
// for(var i =1;i<=n;i++){

//     str+=i+"+"
// }

// console.log(("-"),str)

// var n =9
// var str =""
// for(var i =1;i<=n;i++){
// if(i%2==1){
//     str+=i+"#"
// }
// }
// console.log(str)


// sum of thse number❗❗❗❗ string to array
var n = 9999
        n += ""
        var s = 0

        for(var i = 0; i < n.length; i++) {
            s += +n[i]
        }
        console.log(s)

// let  n = 9999
// let res = n.toString().split("").map(Number).reduce((a,b)=>a+b)
// console.log(res)

// let  n = 9999
// let res =n
// while(res>10){

//     res = res.toString().split("").map(Number).reduce((a,b)=>a+b)

// }
// console.log(res)

// let n = 7
// let res =""
// for(let  i =1;i<n+1;i++){
//     if(i%3==0){

//         res = "x"+res
//     }
//     else{
//       res=i+res
//     }
// }

// console.log(res)

// let n = 7; // row or column count
// // defining an empty string

// for(let i = 0; i < n; i++) { // external loop
//     let string = "";
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
// //   string += "\n";
//   console.log(string);
// }
// // printing the string

// var n = 7;
// for (var i = 1; i <= n; i++) {
//   var str = "";
//   var mid = Math.ceil(n / 2);
//   for (var j = 1; j <= n; j++) {
//     if (i == 1) {
//       str += "* ";
//     } else if (j == mid) {
//       str += "* ";
//     } else {
//       str += "  ";
//     }
//   }
//   console.log(str)
// }







// var n = 7;
// for (var i = 1; i <= n; i++) {
//   var str = "";
// //   var mid = Math.ceil(n / 2);
//   for (var j = 1; j <= n; j++) {
//     if (j == 1|| j==n) {
//       str += "* ";
//     } else if (i == j) {
//       str += "* ";
//     } else {
//       str += "  ";
//     }
//   }
//   console.log(str)
// }




// var n = 7;
// var m =2
// var k =n-1
// for (var i = 1; i <= n; i++) {
//   var str = "";
// //   var mid = Math.ceil(n / 2);
//   for (var j = 1; j <= n; j++) {
//     if (i == 1|| i==n) {
//       str += "* ";
//     } else if (m==i && k==j) {
//         m++
//         k--
//       str += "* ";
//     } else {
//       str += "  ";
//     }
//   }
//   console.log(str)
// }

 
//  var i ,j, end=20;
//  var isPrime =1;
//  var sum=0;
//  for(i=2; i<=end; i++){
//   for(j=2; j<i/2; j++ ){
//     if (i %j==0){
//       isPrime=0;
//       break;
//     }
//   }
//   if(isPrime==1){
//     sum += i;
//   }
//  }
//  console.log(i)




// var str = "abca"
// for(var i =0;i<str.length;i++){
//   if(str[i]=="a" || str[i]=="b"){
//      console.log(str[i] + " at index:" + i)
//   }
// }



// //  good pair


// nums = [1,1,1,1]
// var count = 0; 
// for(var i = 0; i < nums.length; i++) {
//     for(var j = i+1; j < nums.length; j++) {
//         if(nums[i] == nums[j]) {
//             count++;
//         }
//     }
// }
// console.log(count)




// find the largest string Number

// var n = "56hgsvsb89nhhs789"
// var max = 0
// var ans = ""
// for(var i = 0; i < n.length; i++) {
//     if(+n[i] > 0) {
//         ans += n[i]
//     } else {
//         max = Math.max(max, +ans)
//         ans = ""
//     }
// }
// max = Math.max(max,+ans)

// console.log(max)



// // exam score

// var ans = 0 
// var N = ar1.length 

// for(var i = 0; i < N; i++) {
//     if(ar1[i] == ar2[i]) {
//         ans +=4
//     } else if(ar2[i] == "blank") {
        
//     } else{
//         ans -= 1
//     }
// }
// console.log(ans)





// // find the pair unique number

// var arr = [2,3,1,6,3,6,2,1,9]
// arr.sort((a,b)=>a-b)
// // console.log(arr)
// for(var i =0;i<arr.length;i++){
//     if(arr[i]!=arr[i-1] && arr[i]!=arr[i+1]){

//         console.log(arr[i])
//         break;
//     }
// }





// var a = "aaa*bbb"
//     a = a.split("*")
//     var ans = ""
//     for(var i = 0; i < a[0].length; i++) {
//         ans += a[0][i] + a[1][i]
//     }
    
//     console.log(ans)


// var a = "4546793"
    
//     var ans = a[0]
//     for(var i = 1; i < a.length; i++) {
//         if(a[i] % 2 == 0 && a[i-1] % 2 == 0) {
//             ans += "*"
//         } else if (a[i] % 2 == 1 && a[i-1] % 2 == 1){
//           ans += "-"
//         }
//         ans += a[i]
//     }
    
//     console.log(ans)





// var arr = [55, 44, 65,1,2,3,3,34,5];

// var unique = [...new Set(arr)]
// console.log(unique)



// find the remove duplicate

var arr = [55, 44, 65,1,2,3,3,34,5];
arr.sort((a,b)=>a-b)
let res =1
for (let index = 1; index < arr.length; index++) {
   if(arr[index-1]!=arr[index]){
    arr[res]=arr[index]
    res++
   }
}
console.log(arr.slice(0,res))

// =========================================================================
// sum all array

var arr = [[3, 2], [1], [4, 12]] 
var sum =0

  

  for (var i = 0; i < arr.length; i++) {
    
  
    for (var j = 0; j < arr[i].length; j++) {
      
    
      sum += arr[i][j];
      
    }
    
  }
  
console.log(sum)

  


// ans = ""
// var str = "mohan is good student"
// for(var i =0;i<str.length;i++){
//   if(str[i]!==" "){
//     ans+=str[i]
//   }
//   else{
//     console.log(ans)
//     ans= " "
//   }
// }





// var arr = [55, 44, 65,1,2,3,3,34,5];
// arr.sort((a,b)=>a-b)
// console.log(arr)
// let res =1
// for (let index = 1; index < arr.length; index++) {
//    if(arr[index-1]!=arr[index]){
//     arr[res]=arr[index]
//     res++
//    }
// }
// console.log(arr.slice(0,res))








// Input: "Welcome to this Java!"; 
// Output : "emocleW ot siht !avaJ"


// var str = "Welcome to this Java!"; 
// var demo =[]
// let res = str.split(" ").reverse()
// for(var i =0;i<res.length;i++){
//    var str1 = res[i].split("").reverse().join("")
//    demo.push(str1)

// }



// console.log(demo.reverse().join(" "))







// var arr =[1,4,4,2,4,1,2,4,1] 
// var obj ={}



// for(var i =0;i<arr.length;i++){
   
//     if(obj[arr[i]]==undefined){
//         obj[arr[i]]=1

//     }
//     else{
//         obj[arr[i]]++
//     }
// }
// console.log(obj)
// var anssum =0
// for(key in obj){
//     var ans = []
//     var sum =0
//     for(let x =0;x<obj[key];x++){
//         ans.push(key)
//         sum+=(+key)

//     }
//     anssum+=sum
// console.log("["+ans+"]"+" = "+sum)
// }
// console.log(anssum)


// Output: 
// [1,1,1] = 3 
// [4,4,4,4] = 16 
// [2,2] = 4 
// 23



// Input
// var str = "0009200.000016800.000001000.0000/24" 

// let arr=str.split(".");
// let str1="";
// let mask="";
// for(let i=0;i<arr.length;i++){

//     let ans=arr[i].split("");
//     let flag=false;
//     let flag2=false
//     for(let j=0;j<ans.length;j++){

//         if(ans[j]!=0){
            
//             flag=true;
//         }
//         if(ans[j]=="/"){
//             flag2=true;
//         }
//         if(flag===true&&flag2==false){
            
//            str1+=ans[j] 
//         }
//         if(flag===false&&flag2===true){
//             mask+=ans[j]
//         }

//     }
//     str1+="."
// }
// console.log(str1)

// console.log(mask)
// output 
// ip: 9200.16800.1000.0 
// mask: 24





//
//'abcabcjbudfbcabchcabccabbcabcvxgaxacbabcc'
//Count how many times 'abc' is present in above string
var str = 'abcabcjbudfbcabchcabccabbcabcvxgaxacbabcc'
var count =0
var ans = ""
for(var i = 2;i<str.length;i++){
    ans+=str[i-2]+str[i-1]+str[i]
  if(ans =="abc"){
    count++
  }
 ans= ""
}
console.log(count)


// var arr = [0,1,1,1,1]

// var sum = 0
// for(var i = 0; i < arr.length; i++) {
//     if(arr[i] == 1) {
//         sum += i + 1
//     }
// }
// console.log(sum)


// merge two sorted Array❗❗❗❗❗❗
var arr1 = [1, 3, 4, 5, 6, 8];
var arr2 = [4, 6, 8, 9, 11];
function mergeSortedArrays(arr1, arr2){
   var res = [];
   let i = 0;
   let j = 0;
   while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
         res.push(arr1[i]);
         i++;
      }else{
         res.push(arr2[j]);
         j++;
      }
   };
   while(i < arr1.length){
      res.push(arr1[i]);
      i++;
   };
   while(j < arr2.length){
      res.push(arr2[j]);
      j++;
   };
   return res;
};
console.log(mergeSortedArrays(arr1, arr2));


//make substring and find all palindrome

let str = "abcdcbce"
    function check(str){

        let i =0
        let j =str.length-1
        while(i<j){
            if(str[i++]!==str[j--]){
                return false
            }
    }
    return true

    }
    for(let i =0;i<str.length;i++){    //substring make
        let bag = ""
        for(let j =i;j<str.length;j++){
            bag+=str[j]
            if(check(bag)){
                console.log(bag)
            }
        }
    }
    // check(str)




    // given longest substring and contains "0" in max times

    var count =0
    var max =  0
    
    var arr = "112300451"
    for(var i = 0; i<arr.length;i++){
if(arr[i]=="0"){
    count++
 max = Math.max(max,count)
}
else{
    count =0
}

    }
console.log(max)


// how count all upper case and lower and number

var str = "ABhvhvd568"
var alpha= 0
var small = 0
var number = 0
for(var i =0;i<str.length;i++){
    if(str[i]>="A" && str[i]<="Z"){
        alpha++

    }
    else if(str[i]>="a" && str[i]<="z"){
        small++
    }
    else if(str[i]>="0" && str[i]<="9"){
        number++
    }
}
console.log(alpha);
console.log(small);
console.log(number);




//make substring and find all palindrome and maxximum length of palindrome


let S = "abcdcbce"
let arr = []
for(let i =0;i<S.length;i++){
    let res = ""
    for(let j =i;j<S.length;j++){
        res+=S[j]
        // console.log(res)
        
        let red = res.split("").reverse().join("")
        if(red==res){
            arr.push(res.length)
            console.log(res)
            
        }
    
}
    
}
console.log(Math.max(...arr))




// Single Number Quesrion find unique

let arr = [4,1,2,1,2]
// output = 4

let res = {}

for(let i =0;i<arr.length;i++){

    if(res[arr[i]] != undefined) {
        res[arr[i]]++
    } else{
        res[arr[i]] = 1
    }

}

for(var i in res) {
    if(res[i] == 1) {
        console.log(i)
    }
}




// find the next and advanced number 

let  arr = [10, 9, 8, 7, 7, 7, 5, 5]

let  n = 8
let k = 5
count = 0;
for (i=0;i<arr.length;i++){
  if (arr[i] >= arr[k-1] && arr[i] > 0) {
    //   console.log(arr[i]+"b"+arr[k-1])
      count++
  }
}
console.log(count)


// Two sum
 
let arr = [2, 7, 11, 15]
let target = 9

for(let i =0;i<arr.length;i++){
    for(let j =i+1;j<arr.length;j++){
        if(arr[i]+arr[j] == target){
            console.log(i,j)
        }
    }
}

// var longestCommonPrefix = function(strs) {
    // var longestCommonPrefix = function (strs) {
        // console.log(strs[i+2][j]);
    let strs = ["flower", "flow", "flight"];

      for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
          if (strs[i][j] == strs[i + 1][j] && strs[i + 1][j] ==strs[i + 2][j]) {
            console.log(strs[i][j]);
            
          } else {
        //     console.log(-1)
        //   }
        }
      }
    
    // console.log(longestCommonPrefix(strs));




    // longest substring without repecting char 
    let arr = "abcabdcabc"

var max = 0
let ans = ""
for(let i =0;i<arr.length;i++){
    if(!ans.includes(arr[i])) {
        ans += arr[i]
        max = Math.max(max, ans.length)
    } else {
        ans = arr[i]
    }
}

console.log(max)





// 3rd maiximum Number


let arr = [1, 2]
arr.sort((a,b)=>b-a)
// console.log(arr)
let count = 0

for(let i =0;i<arr.length;i++){
    if(arr[i]!==arr[i+1]){
count++
if(count==3){
    console.log(arr[i])
}
    }
    
}


// Count Number of Pairs With Absolute Difference K


let arr = [3,2,1,5,4]

 let k = 2
 let count =0

 for(let i =0;i<arr.length;i++){
    for(let j =i+1;j<arr.length;j++){
        if(Math.abs(arr[j]-arr[i])==k){
            count++
        }
        
        
    }
}
console.log(count);


// Check If Two String Arrays are Equivalent

let word1 = ["ab", "c"]
let word2 = ["a", "bc"]

let res = word1.join("")==word2.join("")
console.log(res)


// maximum product diff two pair 

let arr = [4,2,5,9,7,4,8]
arr.sort((a,b)=>a-b)
console.log(arr);  //2 4 4 5 7 8 9

let res = arr[arr.length-1]*arr[arr.length-2] -arr[0]*arr[1]
console.log(res)




// find the lowest and highest number

numbers = [2, 4, 9, 2, 0, 16, 24]

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }

}
  console.log(largest);
  console.log(smallest);