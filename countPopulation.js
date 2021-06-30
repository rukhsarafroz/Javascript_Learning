/* COunt population of each state from given array of object */
let array=[
    {"Gujrat": 2000},
    {"Maharashtra":3000},
    {"Andhrapradesh":4000}
]

function  totalPopulation(array){
    let total=0;
    array.map(obj => {
        let arr = Object.keys(obj);//using keys
        total += obj[arr];
        let arr = Object.values(obj);//using values
        total += arr[0];
    })
  return total;
}
console.log(totalPopulation(array));
/* output: 9000 */