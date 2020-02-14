function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  
  var data = [{
    product: 'Sepatu Stacattu', 
    shoppers : [], 
    leftOver: 10, 
    totalProfit: 0
    },
    {
    product: 'Baju Zoro', 
    shoppers : [], 
    leftOver: 2, 
    totalProfit: 0
    },
    {
    product: 'Sweater Uniklooh', 
    shoppers : [], 
    leftOver: 1, 
    totalProfit: 0
    }]

for( var i = 0; i < shoppers.length; i++){
  
  if ( shoppers[i].product == 'Sepatu Stacattu' && data[0].leftOver >= shoppers[i].amount){
    data[0].leftOver -= shoppers[i].amount
    data[0].totalProfit += shoppers[i].amount * listBarang[0][1]
    data[0].shoppers.push(shoppers[i].name)
  }
  
  else if ( shoppers[i].product == 'Baju Zoro' && data[1].leftOver >= shoppers[i].amount){
  data[1].leftOver -= shoppers[i].amount
  data[1].totalProfit += shoppers[i].amount * 500000
  data[1].shoppers.push(shoppers[i].name)
  }
  
  else if ( shoppers[i].product == 'Sweater Uniklooh' && data[2].leftOver >= shoppers[i].amount){
  data[2].leftOver -= shoppers[i].amount
  data[2].totalProfit += shoppers[i].amount * 175000
  data[2].shoppers.push(shoppers[i].name)
  }
  }

    // console.log(data)
  
  

return data  
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]