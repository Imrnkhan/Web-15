// var arr = [2,7,11,15]
// var n = arr.length
// var b = 9
// var a = "-1 -1"
// var i = 0
// var j = n-1
// while(i<j){
//     var sum = arr[i]+arr[j]
//     if(sum==b){
//         a =i+" "+j
//         break;
//     }else if(sum<b){
//         i++
//     }else{
//         j--
//     }
// }
// console.log(a)

// arr =[10, 9, 8, 7, 7, 7, 5, 5]
// var k =5
// function whoIsGoingForward(arr,k){
//     count = 0;
//     for (i=0;i<arr.length;i++){
//       if (arr[i] >= arr[k-1] && arr[i] > 0) count++;
//     }

//     return count;
// }
// console.log(whoIsGoingForward(arr,k))

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// output = 1 4 7 5 3 6 9

function nTraversal(matrix) {
  var s = ""
  for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}


// console.log(typeof null)
// console.log(1=="1")
// var arr = [1,2,3,,4,5,6]
// arr[0]=999
// console.log("arr:",arr)


var a = 10
function scope(){
  var b =20
}
scope()
console.log(a,b)


{
  let b = 20
}
console.log(b)