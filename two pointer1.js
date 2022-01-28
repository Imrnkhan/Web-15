arr = [1,2,3,4,5]
ans = 5;
var i = 0;
var j = arr.length-1
while(i<j){
    var sum =arr[i]+arr[j]
    if(sum==ans){
        console.log(i,j)
        break
    }else if(sum<ans){
        i++
    }else{
        j--
    }
}