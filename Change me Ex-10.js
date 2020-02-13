function changeMe(arr) {
  
  for ( var i = 0; i<arr.length ; i++){
   var hasil = {
    firstName : arr[i][0],
    lastName : arr[i][1],
    gender : arr[i][2],
   } 
    
      if(arr[i][3] > 0){
        hasil.age = 2000 - arr[i][3]
      }
      else{
        hasil.age = 'Invalid Birth Year'
      } 

  console.log(`${i+1}. ${hasil.firstName} ${hasil.lastName}`)
    console.log(hasil)
  
  }
}  




// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""