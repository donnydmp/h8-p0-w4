function changeMe(arr) {
  

    for (let i=0; i<arr.length; i++) {
        let hasil = {};

        for (let j=0; j<arr[i].length+1; j++) {
            if (j === 0) {
                console.log(i+1+'. '+arr[i][j]+' '+arr[i][j+1]+':');
                hasil.firstName = arr[i][j];
            } else if (j === 1) {
                hasil.lastName = arr[i][j];
            } else if (j === 2 ) {
                hasil.gender = arr[i][j];
            } else if (j === 3) {
                if (arr[i][j] !== undefined) {
                    hasil.age = 2020 - arr[i][j];
                } else {
                    hasil.age = 'Invalid Birth Year';
                }
            }
        }

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