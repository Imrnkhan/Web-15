// /* object method of the find the unique number in arrays*/👍👍👍👍
// let arr = ["aman","kmala","rahul","pawan","hament","nitin","rahul","aman"]
// //given this arr find the unique means only single name count not double

// let unique = {}

// //agian loop start in the arr.length
// for(var i = 0;i<arr.length;i++){
//     unique[arr[i]]="prsent"

// }
// // console.log(unique)
// console.log(Object.keys(unique))



/* find the given a string how many time present the each chracter in the string
// 2. Given a string print the number of times each character appears

*/

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



// Q. find the map Character 




// var N= 5
// var data = {}
// var char = "abcdefghi"
// for(var i =0;i<N;i++){
// var res = char[i]
// data[i]=res
// console.log(data[i]+"-"+(i+1))

// }


var arr = [456,125,36,2,5,4,6,32,1]
arr.sort((a,b)=>b-a)
for(var i =0;i<arr.length;i++){
    if(arr[0]<arr[i]){
        arr[0]=arr[i]
    }
}
console.log(arr[0]);


// var arr = [3, 5, 0, 9, 8]
// for(var i =0;i<arr.length;i++){
//     for(var j =0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             var temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr.join(" "))



// var N = 5
//      for(var i =0;i<N;i++){
//          var sum = ""
//          for(var j = 0;j < N; j++){
//       if(i == 0 || j == 0 || j == N-1 || i == N-1) {
//            sum += "* "
//        } else {
//            sum += "  "
//        }
//     }
//     console.log(sum)
         
//      }


// var N = 17
// isprime = true
// for(var i =2;i<N;i++){
//     if(N%i==0){
//         isprime = false
//     }
// }
//     if(isprime){
//         console.log("Yes")
//     }
//     else{
//         console.log("no")
//     }


// class Main {
//     public static void main(String[] args) {
//     String str = "Hello how are you";
//     String[] s = str.split("\\s");
//     for(String s1:s) {
//     System.out.println(s1);
//     }
//     }
//     }
//     output:
//     Hello
//     how
//     are
//     you

// function fizzbuzz(arr){


            //   ? count number off occurs  
                
                var arr = [1,2,5,6,45,6,6]
                arr.sort((a,b)=>a-b)
            
    const count = {};

for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];

  if (count[arr[i]]) {
    count[arr[i]] += 1;
  } else {
    count[arr[i]] = 1;
  }
}

console.log(count);




// same 


var arr =[1,4,4,2,4,1,2,4,1,4,5,6,7,4,5,4,5] 
var obj ={}



for(var i =0;i<arr.length;i++){
   
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1

    }
    else{
        obj[arr[i]]++
    }
}
console.log(obj)

var max =  0
for(key in obj){
if(obj[key]>max){
    max = obj[key]
}
}
console.log(max)


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


// let arr = [8,9,4,3,6,2,7]
// arr.sort((a,b)=>a-b)
// var res = ""
// for(let i = arr.length-1;i>=0;i--){
// res+=arr[i]+" "
// }
// console.log(res)


// function decompressString(str) {

//     let res = ""
//     for(let i = 0;i<str.length;i++){
//         let n = str[i+1]
//         for(let j =0;j<n;j++){
//             res+=str[i]
//         }
//     }   
//     console.log(res)
// }


// abcde2f1gh3   ==    abcdeabcdefghghgh



// function isNumeric(num) {
//     if (num === '') return false
//     if (num === null) return false
//     return !isNaN(num)
//   }
  

// function decompress(compressedStr) {
//     const array = compressedStr.split('')
//     let prevChar, str = ''
//     for(let i = 0; i < array.length; i++) {
//         if(i === 0) {prevChar = array[i]}
//         if(isNumeric(array[i])) {
//             str += prevChar.repeat(Number(array[i]))
//             prevChar = null
//         } else {
//             if(!prevChar) prevChar = array[i] 
//             else {
//                 str += prevChar
//                 prevChar = array[i] 
//             }
//         }
//     }

//     return str
// }






// Qes = have a sbstring  str = "abcd"

// let str = "abcdcbce"

// count = 0
// for(let i =0;i<str.length;i++){
//     let res = ""
//     for(let j =i;j<str.length;j++){
//         res+=str[j]
//         console.log(res)
//         if(str[i]==str[j]){
//             count++
//         }
//     }
// }
// console.log(count)


// let rev = str.split("").reverse().join("")
// if(rev==str){
    
    // // }
    // let str = "abcdcbce"
    // function check(str){

    //     let i =0
    //     let j =str.length-1
    //     while(i<j){
    //         if(str[i++]!==str[j--]){
    //             return false
    //         }
    // }
    // return true

    // }
    // for(let i =0;i<str.length;i++){    //substring make
    //     let bag = ""
    //     for(let j =i;j<str.length;j++){
    //         bag+=str[j]
    //         if(check(bag)){
    //             console.log(bag)
    //         }
    //     }
    // }
    // check(str)



    // Array both common

      let arr1 = [1,5,6,4,12,3]
      let arr2 = [1,2,36,5,45,4]
      let count = 0

      for(let i =0;i<arr1.length;i++){
        for(let j =0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                count++

                console.log(arr1[i])
            }
        }
    }
    console.log("count : " +""+count)





    

    // Percentage of Letter in String
//     Input: s = "foobar", letter = "o"
// Output: 33


let str = "foobar"
let n =6

let latter = "o"
    let count = 0;
    for (let i =0;i<str.length;i++) { // count how many letters are in s
        if (str.charAt(i)== latter){
            count++;

        }
    }
    let ans = Math.floor(count*100/n)
    // console.log(Math.floor(count*100)/n)
    console.log(ans)




    // Single number find those not duplicate

    let arr = [4,1,2,1,2]

for(let i =0;i<arr.length;i++){
    let a = true
    for(var j =0 ; j < arr.length; j++) {
        if(arr[j] == arr[i] && i != j) {
            a = false
        }
    }

    if(a) {
        console.log(arr[i])
        return
    }
    
}
console.log(-1)

//trika second

// let arr = [4,1,2,1,2]
// // output = 4
// let res = {}

// for(let i =0;i<arr.length;i++){

//     if(res[arr[i]] != undefined) {
//         res[arr[i]]++
//     } else{
//         res[arr[i]] = 1
//     }

// }

// for(var i in res) {
//     if(res[i] == 1) {
//         console.log(i)
//     }
// }



// Find middle 
let arr = [4, 3, 6, 7, 8]

for(let i =0;i<arr.length;i++){
    let a = true
    let b = true
    for(var j = i-1; j >= 0; j--) {
        if(arr[j] > arr[i]) {
            a = false
        }
    }
    
     for(var j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[i]) {
            b = false
        }
    }
    if(a && b) {
        console.log(arr[i])
        return
    }
}

console.log(-1)




// pattren 

// let n = 5;
// let string = "";

// for (let i = 1; i <= n ; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k <=n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);





// remove element those not equal val 
// 2,2

let nums = [3,2,2,3]
let val = 3

let left = 0;
let right = nums.length - 1;

while (left <= right) {
    if (nums[left] === val) {
        nums[left] = nums[right];
        right--;
    }
    else {
        left++;
    }
}

console.log(left)

// other way remove element

let arr =   [ [ 1, 2, 3, 4 ],
              [ 5, 6, 7, 8 ],
              [ 9, 10, 11, 12 ],
              [ 13, 14, 15, 16 ]];

              let n =4
              let m =4
              for(let i =0;i<m;i++){
                for(let j =0;j<n;j++){

                    if (i == 0 || j == 0 || i == m - 1 || j == n - 1){
                        console.log(arr[i][j])
                    }


                }
            }
                 




            // Getting the frequency of an element in an array in JavaScript


            const letters = ["a", "b", "c", "a", "b", "c", "a", "b"];
            const count = {};
            letters.forEach(e => count[e] ? count[e]++ : count[e] = 1 );
            
            console.log(count) // {"a" : 1, "b" : 1, "c" : 1}

// other way 
            
            a    = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
            result = { };
            for(var i = 0; i < a.length; ++i) {
                if(!result[a[i]])
                    result[a[i]] = 0;
                result[a[i]]++;
            }
            console.log(result)




           
            


            // https://oj.masaischool.com/contest/6045/problem/01


            // String count frequency

let str = "GeeeEEKKKss"
for(let i =0;i<str.length;i++){
    let count =1
    while (i + 1 < str.length && str.charAt(i) == str.charAt(i + 1)){
        i++;

        count++;
    }
    console.log(str.charAt(i)+""+count)
}
    
// Array count frequency of Element	


let arr = [1,2,3,4,1,2,35]
for(let i =0;i<arr.length;i++){
let count =  1
while(i+1 < arr.length && arr[i]==arr[i+1]){
    count++
    i++
}
console.log(arr[i]+"=>"+count)
}




// duplicate and repeated number in Array 



// public class Main {
//     public static void main(String[] args) {
//         //intial array
//         int arr[] = {2, 4, 6, 4, 2, 4, 5, 8};
//         int max_element = 8;
        
//         //declare an array of size max_element+1
//         int count_arr[] = new int[max_element+1];
        
//         //loop through the original array and update the count
//         for(int i=0; i<arr.length; i++){
//             count_arr[arr[i]]++;
//         }
        
//         //fetch the element having the max count
//         int max_repeated = Integer.MIN_VALUE;
//         int max_count = -1;
//         for(int i=0; i<arr.length; i++){
//             if(count_arr[arr[i]] > max_count){
//                 max_count = count_arr[arr[i]];
//                 max_repeated = arr[i];
//             }
//         }
        
//         System.out.println("Most repeated: "+max_repeated); 
//     }
// }


// int Solution::kthsmallest(const vector<int> &A, int B) {
//     priority_queue<int>q;
//     for(int i=0;i<A.size();i++){
//         q.push(A[i]);
//         if(q.size()>B){
//             q.pop();
//         }
//     }
//     return q.top();
// }



// odd and even index sum 

// let  arr = [1, 3, 2, 5, 4];
let arr = [2 ,1 ,3 ,2 ,4]
let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
     
        // Loop to find even, odd sum
        if (i % 2 == 0){

            even += arr[i];
        }
        else{

            odd += arr[i];
        }
    }
    console.log(even+" "+odd)
    console.log(even-odd)


// palindrome 


    let x = "121"
        let num = x.toString().split('');
          let str = num.reverse().join('');
          if (x==str){
            //   return true;
            console.log("yes")
          }else {
            //   return false;
            console.log("no")
          }
      



        //   minimum number of steps.
          let n = 32;
          let count = Math.floor(n/5)

          console.log(count+1);



// https://www.techcrashcourse.com/2016/04/java-example-programs.html
// https://www.javaguides.net/p/java-programs-for-beginners.html
// https://oj.masaischool.com/contest/6676/problems
https://www.tutorialcup.com/interview/string

https://leetcode.com/submissions/#/20



// linklist    
// https://oj.masaischool.com/contest/3399/problems
// https://oj.masaischool.com/contest/4181/problems






let arr = [1,2,3,4,5];
let ans = arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
        ans.push(arr[i])
    }
    console.log(ans)
}
