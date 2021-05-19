/*Remove first 2 element from list using destructuring*/
function removeFirstTwoEle(list){
    const [a,b,...arr] = list;
    return arr;
}
let arr = [8,9,10,11,12,13];
console.log(removeFirstTwoEle(arr));