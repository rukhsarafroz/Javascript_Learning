/*write own utility of map function*/
const array = [1,2,3,4];
function map(arr,mapFunc){
    const mapArr = [];
    for(let i = 0; i < arr.length; i++){
        const result = mapFunc(arr[i],i);
        mapArr.push(result);
    }
    return mapArr;
}
const newArray = map(array,num => num ** 2);
console.log(newArray);/*output after own utility*/
const squareArray = array.map(num => num ** 2);
console.log(squareArray);/*output after inbuilt map function */