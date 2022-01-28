
// var items = [ 1, 2, 3, 4, 5, 6,9];

// // console.log(items);


// var items2 = [
//                 [1,2,3],
//                 [4,5,6],
//                 [7,8,9]
//               ];

// console.log(items2[0]);
// console.log(items2[1]);
// console.log(items2[2]);








// var items2 = [
//     ["A","B","C"],
//     ["D","E","F"],
//     ["G","H","I"]
//   ];

// console.log(items2[0]);
// console.log(items2[1]);
// console.log(items2[2]);







// var items = [];

// items.push([1,2,3]);
// items.push([4,5,6]);
// items.push([7,8,9]);



// var row = items.length;
// var col = items[0].length;

// var bag = "";
// for(var father=0; father<row; father++)
// {
//   for(var son=0; son<col; son++)
//   {
//     bag = bag + items[son][father]+" ";
//   }
// }
// console.log(bag);




// // Given a square matrix print both the diagonals
// var items = [];

// items.push([1,2,3]);
// items.push([4,5,6]);
// items.push([7,8,9]);



// var row = items.length;
// var col = items[0].length;

// var bag = "";
// for(var father=0; father<row; father++)
// {
//   for(var son=0; son<col; son++)
//   {
//     bag = bag + items[son][father]+" ";
//   }
// }
// console.log(bag);



// items.push([1,2,3]);
// items.push([4,5,6]);
// items.push([7,8,9]);



// var leftD = [];
// var rightD = [];

// for(var i = 0; i<items.length; i++){
//   leftD.push(items[i][i]);
// }

// var cols = items[0].length - 1;
// for(var i = 0 ; i<items.length; i++){
//   rightD.push(items[i][cols-i]);
// }

// console.log(leftD.join(" "));
// console.log(rightD.join(" "));


// // Given a matrix print it in the form of a snake


// var items = [];

// items.push([1,2,3,3.5]);
// items.push([4,5,6,7.5]);
// items.push([7,8,9,10]);
// items.push([11,12,13,14]);


// var rows = items.length;
// var cols = items[0].length;

// var bag = [];
// for(var i =0 ;i<rows; i++){

//   if(i%2==0){
//     for(var j=0; j<cols; j++){
//       bag.push(items[i][j]);
//     }
//   }

//   else{
//     for(var j=cols-1; j>=0; j--){
//       bag.push(items[i][j]);
//     }
//   }
  
// }

// console.log(bag.join(" "));



// var item = [];

// item.push("A");
// item.push("B");
// item.push([1,2,3]);

// console.log(item);





// var items = [];

// items.push([1,2,3]);
// items.push([4,5,6]);
// items.push([7,8,9]);

// console.log(items);




// var arr2 = [
//     ["a","b","c"],
//     [1,2,3],
//     ["M","N","O"]
// ]

// console.log(arr2);





// var arr = [];
// arr.push(["a","b","c"]);
// arr.push([1,2,3]);
// arr.push(["M","N","O"]);

// console.log(arr);






// var name = [
//     ["vatsal",28,"male"],
//     ["Hitesh", 30, "male"]
// ];



// console.log(name[0][0]);
// console.log(name[0][1]);
// console.log(name[0][2]);
// console.log(name[1][0]);
// console.log(name[1][1]);
// console.log(name[1][2




//     var name = [
//         ["vatsal",28,"male", ["vcoding","running"]],
//         ["Hitesh", 30, "male",["reading","hcycling"]]
// ];




// console.log(name[1][3][0][4]);




// var floor1 = [1,2,3,4];
// var floor2 = [1,2,3,4];
// var floor3 = [1,2,3,4];


// var item = [];

// item.push(floor1);
// item.push(floor2);
// item.push(floor3);

// console.log(item);


// // Q1
// console.log(item.length);

// console.log(item[0].length);






// ​
// var items = [];
// ​
// items.push([1,2,3]);
// items.push([4,5,6]);
// items.push([7,8,9]);
// ​
// ​
// ​
// var row = items.length;
// var col = items[0].length;
// ​
// for(var father=0; father<row; father++)
// {
//   var bag = "";
//   for(var son=0; son<col; son++)
//   {
//     bag = bag + items[father][son]+" ";
//   }
//   console.log(bag);
// }
// ​
// ​
// // for(var i = 0; i<items.length; i++){
// //   console.log(items[i]);
// // }
// ​



// ⌄
// ​
// var items = [];
// ​
// items.push([1,2,3]);
// items.push([4,5,6]);
// items.push([7,8,9]);
// ​
// ​
// ​
// var row = items.length;
// var col = items[0].length;
// ​
// var bag = "";
// for(var father=0; father<row; father++)
// {
//   for(var son=0; son<col; son++)
//   {
//     bag = bag + items[father][son]+" ";
//   }
// }
// console.log(bag);
// ​
// ​
// ​



var day = "tue"
var N= 8
var arr = ["sun", "mon", "tue", "wed","thu","fri", "sat"]
var n = arr.length;
for(var i = 0;i<n;i++){
    if(day==arr[i]){
        var d = (N+(i))%7
         console.log(arr[d])
    }
   
}

