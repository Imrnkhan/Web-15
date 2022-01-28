/*
You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

The 2D array is stored in a variable with the namearr

For all rows, you have to print the sum of even elements present in the row

For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10) 
8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8)


Input
The first line of the input contains the value stored inNandM

The nextNlines containMvalues each denoting the value stored inarr


Output
For each row, print the sum of even numbers present in the row, line by line

Sample Input 1 

3 3
1 2 3
4 5 6
7 8 9
Sample Output 1

2
10
8
*/

function evenSumRows(N,M,arr){
    var sum = [];
    for(var r=0; r<N; r++) {
        var s = 0;
        for(var c=0; c<M; c++) {
            if(arr[r][c]%2==0) {
                s += arr[r][c];
                sum[r] = s;
            }
        }

    }
    for(var i=0; i<sum.length; i++) {
        console.log(sum[i]);
    }
}
