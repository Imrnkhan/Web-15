// let a = "5"
// let b = "8"
// let c =  9
// let d = 10
// console.log(a+b+c+d)
// this solution base of the frist string and converts Number




var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var new_str = "";
flag = 1;
for(let i = 0; i<N; i++){
  for(let j = 0; j<26; j++){
    if(str[i] == upper[j]){
      flag = 0;
    }
  }
  if(flag){
     new_str += str[i];
  }
  flag = 1;
}
console.log(new_str);

}



01
Insert a node at the Head	
02	
Insert a node at the Tail	
03	
Insert at a specific position	
04	
Deleting a Node	
05	
Reverse the Linked List	
06	
Nth node from the end	
07	
Middle Node	
08	
Rotate Linked List
