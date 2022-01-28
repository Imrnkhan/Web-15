// 3
// 4 9
// 2 7 11 15
// 5 10
// 1 2 3 5 5
// 2 100
// 48 49

// 1st of taking input part written in the function.
function runProgram(input)


// and after that check the input line in the test case how many line 
input= input.split("\n")

// than test which index 
var t = input[0]

// defined the line index
var line = 1


// after that start the loop nth line 

for(var i = 0;i<t;i++){
    var [M,B] = input[line].split(" ").map(Number)
    line++;
    // string converts the array
    var arr = input[line].split(" ").map(Number)
    line++;
    check(M,B,arr)
}
// and after that start the function on Q
// This is basic two pointer Approch
function twoSum(array,k){
    start = 0
    end = array.length - 1
    while(start < end){
            sum = array[start] + array[end]
            if (sum == k) 
            return true
            else if (sum > k) 
            end--;
            {
                else if(sum<k)
                start++
            }
                    
            }
            return false
}