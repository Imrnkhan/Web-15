// sum = 0
// for(var i = 0;i<=10;i++){
//     if(i%2==1){
//         sum = sum+i
//     }
  
// }
// console.log(sum)


// subarrays
// for(var i =1;i<10;i++){
//     for(var j =i;j<10;j++){
//         for(var k=i;k<j;k++){
//             console.log(k)+" "

//         }
//     }
// }


// arr = [12, 18, 17, 65, 46]
// N = 2

// for(var i=0;i<N;i++){
//      var min = i
//      for(var j=i+1;j<N;j++){
//           if(arr[min]%k > arr[j]%k){
//           min = j
//           }
//      }
//      var temp = arr[min]
//      arr[min] = arr[i]
//      arr[i] = temp
// }
// console.log(arr.join(" "));




runProgram(4)

function runProgram(input) {
    var n = +input
    console.log(array(n,[]))
}
function array(n,cur){
    if(!check(cur)){
        return 0;
    }
    if(cur.length == n){
        return 1
        console.log(cur);
    }
    var row = []
    for(var i = 0; i < n; i++){
        row.push(".")
    }
    var ans = 0
    for(var i = 0; i < row.length;i++){
        row[i] = "Q"
        cur.push(row)
        ans += array(n,cur)
        cur.pop(row)
        row[i] = "."
    }
    return ans
}
function check(board){
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length;j++){
            if(board[i][j] == "Q"){
                var count = 0
                for(var k = 0; k < board.length;k++){
                    if(board[k][j] == "Q"){
                        count++
                        if(count > 1){
                            return false;
                        }
                    }
                }
                
                var count = 0
                var di = i
                var dj = j
                while(di < board.length && dj < board.length){
                    if(board[di][dj] == "Q"){
                        count++
                        if(count > 1){
                            return false;
                        }
                    }
                    di++
                    dj++
                }
                
                var count = 0
                var di = i
                var dj = j
                while(di >= 0 && dj >= 0){
                    if(board[di][dj] == "Q"){
                        count++
                        if(count > 1){
                            return false;
                        }
                    }
                    di--
                    dj--
                }
                
                var count = 0
                var di = i
                var dj = j
                while(di >= 0 && dj < board.length){
                    if(board[di][dj] == "Q"){
                        count++
                        if(count > 1){
                            return false;
                        }
                    }
                    di--
                    dj++
                }
                
                var count = 0
                var di = i
                var dj = j
                while(di < board.length && dj >= 0){
                    if(board[di][dj] == "Q"){
                        count++
                        if(count > 1){
                            return false;
                        }
                    }
                    di++
                    dj--
                }
            }
        }
    }
    return true;
}