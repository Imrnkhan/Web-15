// let a = "5"
// let b = "8"
// let c =  9
// let d = 10
// console.log(a+b+c+d)
// this solution base of the frist string and converts Number




// var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var new_str = "";
// flag = 1;
// for(let i = 0; i<N; i++){
//   for(let j = 0; j<26; j++){
//     if(str[i] == upper[j]){
//       flag = 0;
//     }
//   }
//   if(flag){
//      new_str += str[i];
//   }
//   flag = 1;
// }
// console.log(new_str);

// }




function runProgram(input) {
  input = input.split("\n")
  var[n,k]= input[0].split(" ").map(Number)
  arr = input[1].split(" ").map(Number)
  console.log(lower(n,k,arr))

}
function lower(n,k,arr){
  start = 0
  end = arr.length-1
  ans = -1
  while(start<=end){
      let mid = Math.floor(start+(end-start)/2)
      if(arr[mid]==k){
          ans = mid
          end = mid-1
      }
      else if(arr[mid]>k){
          end = mid-1
      }
      else{
          start = mid+1
      }
  }
  return ans
  
}
if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}