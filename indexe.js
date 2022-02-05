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





    // var maxSpeed = {
    //     car: 300, 
    //     bike: 60, 
    //     motorbike: 200, 
    //     airplane: 1000,
    //     helicopter: 400, 
    //     rocket: 28800
    // };
    // var sortable = [];
    // for (var vehicle in maxSpeed) {
    //     sortable.push([vehicle, maxSpeed[vehicle]]);
    // }
    
    // sortable.sort(function(a, b) {
    //     return a[1] - b[1];
    // });
    
    
    //[["bike", 60], ["motorbike", 200], ["car", 300],
    //["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

//     function Newspaper(h){
//         this.date=new Date()
//         this.id=Math.random()*10
//         this.name='TOI'

//     this.headline=h
    
//      }
    
//     var n1=new Newspaper("India wins world cup")
// //CF will allow you to add a property using .prototype.
//     Newspaper.prototype.advertisment = function (ad)
//     {
//     console.log(ad)
// }	//can be invoked like this
//     n1.advertisement("buy shoes")
 


// var arr = [2, 3, 4, 6]
// var n= 4
// var k = 3
// left = -1
// right = 0
// sum = 0;
// for (i = 0;i<arr.length;i++){
//    if (arr[i] % k != 0){
//        if (left == -1) left = i
//        right = i
//    }
//    sum += arr[i]
// }
// if (sum % k != 0) return 1 
// if (left == -1) return 0
// left = left + 1
// right = arr.length - right

// max_window_size = arr.length - min(left,right)
// return window_size




function runProgram(input){
    input = input.split("\n")
    var tc = +input[0]
    var queue = []
    var stack = []
    for(var i = 1;i<tc;i++){
        var [num,m] = input[i].split(" ").map(Number)
        if(num==1){
            queue.push(m)
        }
        else if(num==2){
            stack.push(m)
        }
        else if(num==3){
            if(queue.length==0){
                console.log(-1)
            }
            else{
                console.log(queue[0])
            }
        }
        else if(num==4){
            if(stack.length==0){
                console.log(-1)
            }
            else{
                console.log(stack[stack.length-1])
            }
        }
        else if(num==5){
            stack.push(queue.shift())
        }
    }
}



// bay ticket stack and queue
function runProgram(input){
    input = input.trim().split("\n")
    var N = +input[0]
    var arr = []
    for(var i = 0;i<N;i++){
        line = input[i+1].trim().split(" ")
        if(line[0]=="E"){
            for(var j = 1;j<line.length;j++){
                arr.push(line[j])
                console.log(arr.length)
            }
        }
        else{
            if(line[0]=="D" && arr.length>0){
                console.log(arr.shift(),arr.length)
            }
            else{
                console.log(-1,arr.length)
            }
        }
    }
}


// List and Queue 
function runProgram(input){
    input = input.trim().split("\n")
    var N = +input[0]
    var arr = []
    for(var i = 0;i<N;i++){
        line = input[i+1].trim().split(" ")
        if(line[0]=="E"){
            for(var j = 1;j<line.length;j++){
                arr.push(line[j])
            }
        }
        else{
            if(line[0]=="D" && arr.length>0){
                console.log("Empty")
            }
    }
}
}