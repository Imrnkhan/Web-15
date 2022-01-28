function runProgram(input) {
    // input = input.split("\n")
    // var t = +input[0]
    // var line = 1
    // for(var i = 0; i < t; i++){
    //     var N = +input[line];
    //     line++;
    //     var arr = input[line].split(" ").map(Number)
    //     line++
    //     array(N,arr)
    // }
    console.log(input)
  }
  
  function array(N,arr){
      var z = ""
      for(var i = 0; i < N; i++){
        var sum = 0
        var a = arr[i].toString()
        for(var j = 0; j < a.length;j++){
          sum += Number(a[j])
        }
        z += sum + " "
      }
  console.log(z)
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  

2
5
12 14 16 17 29
6 
1 2 3 4 5 51