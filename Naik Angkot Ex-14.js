function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var data = []

  if(arrPenumpang == 0){
    return arrPenumpang
  }

  for( var i = 0; i < arrPenumpang.length ; i++){
   
    for(var j = 0; j < rute.length;j++) {
        if(rute[j] == arrPenumpang[i][1]) a = j;
        if(rute[j] == arrPenumpang[i][2]) b = j;
    }
    data[i] = {
    penumpang : arrPenumpang[i][0],
    naikDari : arrPenumpang[i][1],
    tujuan : arrPenumpang[i][2],
    biaya : (b-a)*2000
  }

  }
return data
}
  


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]