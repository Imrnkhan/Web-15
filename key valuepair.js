// # DSA Unit 2 - Session 1

// - 2D Arrays recap
// Diagonals in 2D arrays - 
// ```
// var i = 0
// var j = 0

// while (i < R && j < C) {
//     console.log(arr[i][j])
//     i++
//     j++
// }

// var i = 0
// var j = 3

// while (i < R && j >= 0) {
//     console.log(arr[i][j])
//     i++
//     j--
// }
// ```

// Spiral traversal of 2D array - 
// input - 

// ```
// 1 2 3
// 4 5 6
// 7 8 9
// ```

// output - `1 2 3 6 9 8 7 4 5`

// ```
// function spiral(arr, n, m) {
//     var visited = []
//     // creating nXm matrix with every element set to false
//     // this visited[i][j] will indicate if cell i, j is visited or not
//     for (var i = 0;i < n;i ++) {
//         var temp = []
//         for (var j = 0;j < m;j ++) {
//             temp.push(false)
//         }
//         visited.push(temp)
//     }

//     var i = 0
//     var j = 0
//     var direction = 0
//     // 0 direction moves right (j ++)
//     // 1 direction moves down (i ++)
//     // 2 direction moves left (j --)
//     // 3 direction moves up (i --)

//     while(i >= 0 && i < n && j >= 0 && j < m && visited[i][j] == false) {
//         // do the following UNTIL i, j are in bounds and i, j is NOT visited
//         console.log(arr[i][j]) // print current cell
//         visited[i][j] = true // mark ask visited
//         if (direction == 0) {
//             if (j + 1 >= m || visited[i][j + 1] == true) {
//                 // this is true if the next step is out of bounds or next cell is visited
//                 // so change direction and start moving in that direction
//                 direction = 1
//                 i ++
//             } else {
//                 // else continue moving in current direction
//                 j ++
//             }
//         } else if (direction == 1) {
//             if (i + 1 >= n || visited[i + 1][j] == true) {
//                 // this is true if the next step is out of bounds or next cell is visited
//                 // so change direction and start moving in that direction
//                 direction = 2
//                 j --
//             } else {
//                 // else continue moving in current direction
//                 i ++
//             }
//         } else if (direction == 2) {
//             if (j - 1 < 0 || visited[i][j - 1] == true) {
//                 // this is true if the next step is out of bounds or next cell is visited
//                 // so change direction and start moving in that direction
//                 direction = 3
//                 i --
//             } else {
//                 // else continue moving in current direction
//                 j --
//             }
//         } else if (direction == 3) {
//             if (i - 1 < 0 || visited[i - 1][j] == true) {
//                 // this is true if the next step is out of bounds or next cell is visited
//                 // so change direction and start moving in that direction
//                 direction = 0
//                 j ++
//             } else {
//                 // else continue moving in current direction
//                 i --
//             }
//         }
//     }
// }
// ```

// - 3D Arrays
//     - Array of 2D arrays :)
//     - 3 index (x y and j)
//     - Find brightest picture!
// ```
// function highestBrightness(arr, n, a, b) {
//     var index_of_brightest_image = 0
//     var brightest = 0
//     for (var i = 0;i < n;i++) {
//         // var cur_image = arr[i]
//         var br = 0
//         for (var j = 0;j < a;j++) {
//             for (var k = 0;k < b;k++) {
//                 br = br + arr[i][j][k]
//             }
//         }
//         // br has the brightness of cur_image
//         if (br > brightest) {
//             index_of_brightest_image = i
//             brightest = br
//         }
//     }
//     console.log(index_of_brightest_image)
// }
// ```

// - Key Value Pairs (KVPs)
//     - Overview of how they are implemented
//         - key is converted into some kind of int which acts like the index for the value
//     - Operations on KVPs
//         - add KVP
//         - update KVP
//         - delete KVP
//         - get value for a Key
//     - When do we think of using KVPs?
//         - 1-1 or 1-N mapping

//     - Given color of `n` houses, print the color which is used most number of times
// Going through all houses `n` times and counting number of times `arr[i]` is present

// ```
// function count_it(arr, n) {
//     var largest_freq = 0
//     var largest_freq_index = 0
//     for (var i = 0;i < n;i++) {
//         var ct = 0
//         for (var j = 0;j < n;j++) {
//             if (arr[j] == arr[i]) {
//                 ct ++
//             }
//         }
//         // ct is the number of times arr[i] appears in the array
//         if (ct > largest_freq) {
//             largest_freq = ct
//             largest_freq_index = i
//         }
//     }
//     console.log(largest_freq_index)
// }
// ```

// Going through all houses once and storing (and updating) the count
// ```
// function count_it_kvps(arr, n) {
//     var count = {}
//     for (var i = 0;i < n;i++) {
//         if (count[arr[i]] != undefined) {
//             count[arr[i]] ++
//         } else {
//             count[arr[i]] = 1
//         }
//     }
//     // count will have the count of all colors
//     var largest_freq = 0
//     var largest_freq_index = 0
//     for (var key in count) {
//         if (largest_freq < count[key]) {
//             largest_freq = count[key]
//             largest_freq_index = key
//         }
//     }
//     console.log(largest_freq_index)
// }
// ```
