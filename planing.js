// arr1 = [[1, 2, 2, 3, 4, 5]];
// arr2 = [[1, 2, 3, 4, 5, 5]];

// The first line of the input containsN, the number of people Pam has taken help from

// Next line containsNspace separated integers, indicating the ID's of the people, Pam has taken help from

// The next line containsM, the number of people Jim has taken help from

// Next line containsMspace separated integers, indicating the ID's of the people, Jim has taken help from
// 6
// 1 2 2 3 4 5
// 6
// 1 2 3 4 5 5

function runProgram(input) {
  var newInput = input.trim().split("\n");
  var arr1 = newInput[1].split(" ").map(Number);
  var arr2 = newInput[3].split(" ").map(Number);
  console.log(arr1, arr2);
  var obj1 = {};
  var obj2 = {};

  var newArr1 = [];
  var newArr2 = [];
  for (var i = 0; i < arr1.length; i++) {
    if (obj1[arr1[i]] == undefined) {
      obj1[arr1[i]] = 1;
      newArr1.push(arr1[i]);
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    if (obj2[arr2[i]] == undefined) {
      obj2[arr2[i]] = 1;
      newArr2.push(arr2[i]);
    }
  }
  var flag = true;
  if (newArr1.length != newArr2.length) {
    flag = false;
  } else {
    newArr1.sort();
    newArr2.sort();
    for (var i = 0; i < newArr1.length; i++) {
      if (newArr1[i] !== newArr2[i]) {
        flag = false;
        break;
      }
      console.log(newArr1, newArr2);
    }
  }
}

if (process.env.USER === "") {

 
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
