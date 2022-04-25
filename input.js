 // 1 Single Integer
 // 2 multiple test case integer in ine line
 // 3 single array with length n
 // 4 multiple test case array with length n
 // 5 string
 // 6 multiple test case string
 // 7 string with length n
 // 8 multiple test case string with length n
 // 9 string sentance
 // 10 multiple test case string sentance
 // 11 square matrix with size
 // 12 multiple test case square matrix
 // 13 rectangular matrix
 // 14 multiple test case rectangular matrix
 
 

 
    // 1 ❗❗❗❗ single Integer ❗❗❗❗

// input  👇
  
// 4

// output 👇

// 5

//  // input taking part
// function runProgram(input) {
//     var num = +input
//     inputNum(num)
//   }
//   // function part
//   function inputNum(num) {
//       console.log(num + 1)
//   } 
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }

    // 2 ❗❗❗❗ multiple test case integer in one line ❗❗❗❗

// input 👇

// 1 2 3 4

// output 👇

// 2
// 3
// 4
// 5

// // input part
// function runProgram(input) {
//     input = input.split(" ").map(Number)
//     num(input)
//   }
//   // function part
//   function num(input){
//       for(var i = 0; i < input.length; i++){
//           console.log(input[i] + 1)
//       }
//   }
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }

    // 3 ❗❗❗❗ single array with length n ❗❗❗❗

// input 👇

// 5
// 1 2 3 4 5

// output 👇

// 2 3 4 5 6 

// // input taking part
// function runProgram(input) {
//     input = input.split("\n")
//     var N = +input[0]
//     var arr = input[1].split(" ").map(Number)
//     array(N,arr)
//   }
//   // function part
//   function array(N,arr){
//       var a = ""
//       for(var i = 0; i < N; i++){
//           a+= (arr[i] + 1) + " "
//       }
//       console.log(a)
//   }
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 4 ❗❗❗❗ multiple test case array with length n ❗❗❗❗

// input 👇

// 2
// 5
// 1 2 3 4 5
// 4
// 1 2 3 4

// output 👇

// 1 2 3 4 5
// 1 2 3 4

// // input taking part
// function runProgram(input) {
//     input = input.split("\n")
//     var t = +input[0];
//     var line = 1;
//     for(var i = 0; i < t; i++){
//         var N = +input[line]
//         line++
//         var arr = input[line].split(" ").map(Number)
//         line++
//       array(N,arr)
//     }
//   }
//   // function part
//   function array(N,arr){
//       var a = ""
//       for(var i = 0; i < N; i++){
//          a += arr[i] + 1 + " "
//       }
//     console.log(a)
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 5 ❗❗❗❗ string ❗❗❗❗

// input 👇

// aman

//output 👇

// aman

// // input taking part
// function runProgram(input) {
//     var str = input
//     string(str)
//   }
//   // function part
//   function string(str){
//       console.log(str)
//   }
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
  

    // 6 ❗❗❗❗ multiple test case string ❗❗❗❗

// input 👇

// 2
// aman
// sarvar

// output 👇

// aman
// sarvar

// // input taking part
// function runProgram(input) {
//     input = input.split("\n")
//     var t = input[0]
//     var line = 1
//     for(var i = 0; i < t; i++){
//     var str = input[line]
//     line++
//     array(str)
//     }
//   }
//   // function part
//   function array(str){
//     console.log(str)
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 7 ❗❗❗❗ string with length n ❗❗❗❗

// input  👇

// 4
// aman

// output 👇

// aman

// // input taking part
// function runProgram(input) {
//     input = input.split("\n")
//     var str = input[0]
//     var str = input[1]
//     string(n,str)
//   }
//  // function part
//   function string(n,str){
//       console.log(str)
//   }
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }

    // 8 ❗❗❗❗ multiple test case string with length n ❗❗❗❗

// input 👇

// 2
// 4
// aman
// 6
// rutwik

// output 👇

// aman
// rutwik

// // input taking part
// function runProgram(input){
//     input = input.split("\n")
//     var T = +input[0]
//     var line = 1
//     for(var i = 0; i < T; i++){
//         var N = +input[line]
//         line ++
//         var str = input[line]
//         line++
//         array(N,str)
//     }
//   }
//   // function part
//   function array(N,str){
//       console.log(str)
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 9 ❗❗❗❗ string sentance ❗❗❗❗

// input 👇

// my name is sarvar

// output 👇

// my name is sarvar

// // input taking part
// function runProgram(input) {
//     var s = input
//     string(s)
// }
// // function part
//   function string(s){
//       console.log(s)
//   }
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }

    // 10 ❗❗❗❗ multiple test case string sentance ❗❗❗❗

// input 👇

// 2
// my name is aman
// my name is sarvar

// output 👇

// my name is aman
// my name is sarvar

// // input taking part
// function runProgram(input) {
//     input = input.split("\n")
//     var t = input[0]
//     var line = 1
//     for(var i = 0; i < t; i++){
//     var str = input[line]
//     line++
//     array(str)
//     }
//   }
//   // function part
//   function array(str){
//     console.log(str)
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 11 ❗❗❗❗ square matrix with size ❗❗❗❗

// input 👇

// 3 
// 1 2 3
// 4 5 6
// 7 8 9

// output 👇

// 2 3 4
// 5 6 7
// 8 9 10

// // input taking part
// function runProgram(input) {
//     input = input.split("\n")
//     var N = +input[0]
//     var arr = []
//     for(var i = 0; i < N; i++){
//         arr.push(input[i+1].split(" ").map(Number))
//     }
//     array(N,arr)
//   }
//   // function part
//   function array(N,arr){
//       var a = ""
//       for(var i = 0; i < N; i++){
//           for(var j = 0; j < N; j++){
//               a += (arr[i][j] + 1) + " "
//           }
//           a += "\n"
//       }
//     console.log(a)
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 12 ❗❗❗❗ multiple test case square matrix ❗❗❗❗

// input 👇

// 2
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// 2
// 1 2
// 3 4

// output 👇

// 2 3 4
// 5 6 7
// 8 9 10
// 2 3 
// 4 5

// // input taking part
// function runProgram(input) {
    // input = input.split("\n")
    // var t = +input[0]
    // var line = 1
    // for(var i = 0; i < t; i++){
    //     var N = input[line]
    //     line++
    //     var arr = []
    //     for(var j = 0; j < N; j++){
    //         arr.push(input[line].split(" ").map(Number))
    //         line++
    //     }
    //       array(N,arr)
    // }
//   }
//   // function part
//   function array(N,arr){
//       for(var i = 0; i < N; i++){
//       var a = ""
//           for(var j = 0; j < N; j++){
//               a += (arr[i][j] + 1) + " "
//           }
//       console.log(a)
//       }
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 13 ❗❗❗❗ rectangular matrix ❗❗❗❗

// input 👇

// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12

// output 👇

// 2 3 4 5
// 6 7 8 9
// 10 11 12 13

//  input taking part
// function runProgram(input) {
//     input = input.split("\n")
//     var [N, M] = input[0].split(" ").map (Number)
//     var arr = []
//     for(var i = 0; i < N; i++){
//         arr.push(input[i + 1].split(" ").map(Number))
//     }
//     array(N,M,arr)
//   }
//   // function part
//   function array(N,M,arr){
//       var a = ""
//       for(var i = 0; i < N; i++){
//           for(var j = 0; j < M; j++){
//               a += (arr[i][j] + 1) + " "
//           }
//           a += "\n"
//       }
//     console.log(a)
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }


    // 14 ❗❗❗❗ multiple test case rectangular matrix ❗❗❗❗

// input 👇

// 2
// 3 4 
// 1 2 3 4
// 5 6 7 8 
// 9 10 11 12
// 2 3
// 1 2 3 
// 4 5 6

// output 👇

// 2 3 4 5
// 6 7 8 9
// 10 11 12 13
// 2 3 4
// 5 6 7

// // input taking part
// function runProgram(input) {
//     input = input.split("\n");
//     var t = +input[0];
//     var line = 1;
//     for(var i = 0; i < t; i++){
//         var [r,c] = input[line].split(" ").map(Number);
//         line++
//         var arr = []
//         for(var j = 0; j < r; j++){
//             arr.push(input[line].split(" ").map(Number));
//             line++
//         }
//           array(r,c,arr)
//     }
//   }

//   // function part
//   function array(r,c,arr){
//       for(var i = 0; i < r; i++){
//       var a = ""
//           for(var j = 0; j < c; j++){
//               a += (arr[i][j] + 1) + " "
//           }
//       console.log(a)
//       }
//   }
  
//   if (process.env.USER === "") {
//     runProgram(``);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }







// selection sort and bubble sort

// Slection sort method 💥💥💥

// var arr = [5,2,3,1,4]
// var n = 5
// for(var i=0;i<n;i++){
//      var min = i
//      for(var j=i+1;j<n;j++){
//           if(arr[min] > arr[j]){
//           min = j
//           }
//      }
//      var temp = arr[min]
//      arr[min] = arr[i]
//      arr[i] = temp
// }
// console.log(arr);

     // Bubble sort method 💥💥💥

// var arr = [5,2,3,1,4]
// var n = 5
// for(var i = 0; i < n; i++){
//      for(var j = 0 ; j < n-i-1 ; j++){
//           if(arr[j] > arr[j + 1]){
//           var temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j + 1] = temp
//           }
//      }
// }
// console.log(arr)
