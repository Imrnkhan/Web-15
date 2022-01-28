// function Earning(N,K,arr){
//     var max = arr[0];
//     var count = 1;
//     for(var i = 0;i<N;i++){
//         if(arr[i]>max){
//             count++;
//         }
//     }
//     console.log(count)
// }

// function Array(N, arr) {
//   N = 5;
//   arr = [1, 2, 3, 4, 5];
//   var a = "";
//   for (var i = 0; i < N; i++) {
//     a = a + (arr[i] + 1) + " "
//   }
//   console.log(a);
// }

// var N = 2
// arr = [1,2,3,4,5]

// var a = ""
//     for(var i =0;i<N;i++){
//         a= a+arr[i]+1+" "
//     }
//     console.log(a)


// HOW TO DO ARRAY SORT ====>
// Array= [1,2,3,4,5,4,7,2,5,1,0,6,7,8,9]

// Array.sort((a,b)=>a-b)
// console.log(Array)


// find the second maximum number 
// 3 5 7
// arr= [a,b,c]
// arr.sort((a,b)=>a-b)
    
// console.log(arr[0])



// a = [0, 2, 0, 6, 0,0, 9]
//   var N = 7


  
//     var sai = new Map()   
    
//     max =1
//     ans="No mojirty"
//     for(var i =0;i<a.length;i++){
//         if(sai.has(a[i])){
//             sai.set(a[i],sai.get(a[i])+1)
//         }
//         else{
//             sai.set(a[i],1)
//         }
//         if(sai.get(a[i])>max){
//             max=sai.get(a[i])
//             ans=a[i]
//         }
        
//     }
    // if(max>1)console.log("frequnecy of elment : "+max)
    
    
    // console.log(ans)
    // console.log(sai)





    var maxSpeed = {
        car: 300, 
        bike: 60, 
        motorbike: 200, 
        airplane: 1000,
        helicopter: 400, 
        rocket: 28800
    };
    var sortable = [];
    for (var vehicle in maxSpeed) {
        sortable.push([vehicle, maxSpeed[vehicle]]);
    }
    
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    
    //[["bike", 60], ["motorbike", 200], ["car", 300],
    //["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]