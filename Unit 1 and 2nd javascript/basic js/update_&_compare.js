/*
Description

You are given two numbers, stored in variables with the namesnum1andnum2

Print the output of the following operation

num1 > num2, this prints true if num1 is greater than num2, else it prints false
After this operation is performed, another number, stored in a variable with namenum3is added to num1. After this, print the result of the following operation again

num1 > num2, this prints true if num1 is greater than num2, else it prints false

Input
The first and the only line of input contains the values stored in num1, num2 and num3

Output
Print the result of the operations given in the problem statement


Sample Input 1 

4 8 5
Sample Output 1

false
true
*/

function updateAndCompare(num1, num2, num3) {
    console.log(num1 > num2);
    num1+=num3;
    console.log(num1 > num2);
}