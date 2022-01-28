// var num = 14
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

// var num = 7
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


