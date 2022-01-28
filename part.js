
var arr = [3, 5, 0, 9, 8]
var n = 5
// find the output = 0 3 5 8 9

for(var i = 0;i<n;i++){
    var min =i
    for(var j =i+1;j<n;j++){
        if(arr[min]>arr[j]){
            min = j
        }
    }
    var temp = arr[min]
    arr[min]=arr[i]
    arr[i]=temp
}
console.log(arr.join(" "))