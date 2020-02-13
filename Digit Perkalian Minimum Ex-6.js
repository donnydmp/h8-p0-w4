function digitPerkalianMinimum(angka) {
  // you can only write your code here!
    var angka1 = []
  for (var i = 0; i <= angka; i++ ){
  if(angka % i == 0){
    angka1.push(i)
  }
  var angka2 = []
  for ( var j=0; j< angka1.length/2; j++){
    temp = `${angka1[j]}${angka1[angka1.length-1-j]}`
    angka2.push(temp)  
  }

}

return angka2[angka2.length-1].length
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2