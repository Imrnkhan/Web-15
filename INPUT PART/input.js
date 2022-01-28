function runProgram(input){
    var num = +input
    inputNum(num)

}
function inputNum(num){
    console.log(num+1)
}


// multipal test case integer

// 1 2 3 4 5
// out- 2 3 4 5 6


function runProgram(input){
    input = input.split(" ").map(Number)
    num(input)
}
function num(input){
    for(var i = 0;i<input.length;i++){
        console.log(input[i]+1)
    }
}


// single Array with length N 
// 5  test case length
// 1 2 3 4 5  arrays
// out -2 3 4 5 6

function runProgram(input){
input = input.split("\n")
var N = +input[0]
var aar = input[1].split(" ").map(Number)
Array(N,arr)
}
function Array(N,arr){
    var a = ""
    for(var i = 0;i<N;i++){
a=a+(arr[i]+1) +" "
    }
    console.log(a)
}



// multipal test case  length size n 

// 2 test case
// 5   
// 1 2 3 4 5
// 4
// 1 2 3 4
// out- 1 2 3 4 5
// 1 2 3 4


function runProgram(input){
    input = input.split(" ")
    var tc = +input[0]
    var line = 1
    for(var i = 0;i<tc;i++){
        var N = +input[line]
        line++
        var arr = input[line].split(" ").map(Number)
        line++
        Array(N,arr)
    }
}
function Array(N,arr){
    var a = ""
    for(var i =0;i<N;i++){
        a= a+arr[i]+1+" "
    }
    console.log(a)
}




// String -5
// input- aman 


function runProgram(input){
    var str = input
    string(str)

}
function string(str){
    console.log(str)
}

// multipal test case string --6
// input -2
// aman
// ankush

function runProgram(input){
    input = input.split('\n')
    var tc = input[0]
    var line = 1
    for(var i = 0;i<tc;i++){
        var str = input[line]
        line++
        Array(str)
    }
}
function Array(str){
    console.log(str)
}

// string with length N 
// 4
// aman

function runProgram(input){
    input = input.split('\n')
    var str = input[0]
    var n = input[1]
    string(n,str)
}
function string(n,str){
    console.log(str)
}



