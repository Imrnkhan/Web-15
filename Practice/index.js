// var num = 19
// var isPrime = true
// for(var i = 2;i<num;i++){
//     if(num%i==1){
//         var isPrime =false
//     }
//     }
//     if(isPrime){
//         console.log("yes")
//     }else{
// console.log("No")
//     }
// // find the prime number this number is prime or not and check the ture and false
//     var number = 19
//     var isPrime = true
//     for(var i = 2;i<number;i++){
//         if(number%i ==0){
//             var isPrime= false
//         }
//     }
//     if(isPrime){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }

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

// var arr =[1,3,2,4,5]
// var str = ""
// for(var i =arr.length-1;i>=0;i--){
//     str = str+arr[i]+" "
// }
// console.log(str)

// ########## 10
// output = 5
// find the largest arr in number
// var arr = [5,6,8,4,6,9]
// for(var i = 0;i<arr.length;i++){
//     if(arr[0]<arr[i]){
//         arr[0]=arr[i]
//     }
// }
// console.log(arr[0])

// ##########  11
// find the minimum of arr of number

// output= 1
// var arr= [1,2,3,4,5]
// for(var i =0;i<arr.length;i++){
//     if(arr[0]>arr[i]){
//         arr[0]=arr[i]
//     }
// }
// console.log(arr[0])

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

// var str = "HeLLoW"
// var res=""
//   for(var i = 0;i<str.length;i++){
//       var k= str[i]

//     if(str[i]==str[i].toLowerCase()){
//         // console.log(str[i])
//         res+=str[i].toUpperCase()
//     }
//     else{
//         res+=str[i].toLowerCase()
//     }
//   }
// console.log(res)

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

// var str = "mama"
// var rev = str.split("").reverse().join("")

// if(rev == str) console.log("yes")
// else console.log("no")

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

// var str = "aaman"
// var vovel = true
// for(var i = 0;i<str.length;i++){
//     var res = str[i]
//     if(res=="a" || res=="e" || res=="i" || res=="o" || res=="u"){
//         var vovel = false
//         break

//     }
// }
// console.log(vovel)

// #########
// Vowel & Consonant Count
// var count = 0
// var str = "ankush"
// for(var i = 0;i<str.length;i++){
//     var res = str[i]
//     if(res=="a" || res=="e" || res=="i" || res=="o" || res=="u"){
//         count++
//     }

// }
// console.log(count,str.length-count)

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



// var arr = [3, 5, 0, 9, 8]
// var N = 5
//         for(var i = 0; i < N; i++){
//              for(var j = 0 ; j < N-i-1 ; j++){
//                   if(arr[j] > arr[j + 1]){
//                   var temp = arr[j]
//                   arr[j] = arr[j + 1]
//                   arr[j + 1] = temp
//                   }
//              }
//         }
//         console.log(arr.join(" "))



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

// var arr = ["rahul", "mohan", "suraj", "rahul", "mohan","chirag"];
// var unique = {}
// for(var i = 0;i<arr.length;i++){
//         unique[arr[i]]="present"

// }

// console.log(unique)
// console.log(Object.keys(unique))


// Logic 2👍👍
// var res = ["rahul", "mohan", "suraj", "rahul", "mohan","chirag"];

// var unique = []
// for(var i = 0;i<res.length;i++){
//         var count = 0
//         for(var j = 0;j<unique.length;j++){
//                 if(res[i]==unique[j]){
//                         count++
//                 }
//         }
//         if(count==0){
//                 unique.push(res[i])
//         }
// }
// console.log(unique)


// 2. Given a string print the number of times each character appears
