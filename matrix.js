arr=[ [ 1, 2, 3 ], 
      [ 4, 5, 6 ], 
      [ 7, 8, 9 ] ]

      for(var j =0;j<arr.length;j++){
          if(j%2==0){
            for(var i = 0;i<arr.length;i++){
                console.log(arr[j][i])
            }
          }
          if(j%2==1){

          
            for(var i = arr.length-1;i>=0;i--){
                console.log(arr[j][i])
            }
          }
      
      }
      
      //this part for Q1 series and after that continue.. second part.



      
      for(var j =0;j<arr.length;j++){
        if(j%2==0){
          for(var i = 0;i<arr.length;i++){
              console.log(arr[j][i])
          }
        }
        if(j%2==1){

        
          for(var i = arr.length-1;i>=0;i--){
              console.log(arr[j][i])
          }
        }
    
    }
    
    


    // the pesoudo code 
//     Two separate functions can be created for the two queries

// function queryOne(array,n,m){
// for (int i=0;i<n;i++){
//         if (i % 2 == 0){
//             for (int j=0;j<m;j++) print (arr[i][j]);
//         }else{
//             for (int j=m-1;j>=0;j--) print (arr[i][j]);
//         }
//     }
// }

// function queryTwo(array,n,m){
//     for (int i = 0;i<n;i++){
//         if(i%2 == 0){
//             for (int j=m-1;j>=0;j--) print (arr[i][j]);
//         }else{
//             for (int j=0;j<m;j++) print (arr[i][j]);
//         }
//     }      
// }