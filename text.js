var s = "a2c1d3"
var a = ""
var b = ""
var ans = ""
for(var i = 0; i < s.length;i++){
    if(!(i & 1)){
        a += s[i]
    }
}
for(var i = 0; i < s.length;i++){
    if(i & 1){
        b += s[i]
    }
}

for(var i = 0; i < a.length;i++){
    for(var j = 0; j < +(b[i]); j++){
        ans += a[i]
    }
}

console.log(ans)
}
 