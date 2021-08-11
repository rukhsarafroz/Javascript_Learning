const array = [1,2,3,4];

function reduce(arr, reducer, initialValue){
    let accumulator = initialValue ? initialValue : 0;
    for(let i = 0; i < arr.length; i++){
        accumulator = reducer(accumulator,arr[i],i);
    }
    return accumulator;
}
const sumReducer = (accumulator, value) => accumulator + value;
const newArray = reduce(array, sumReducer);
console.log(newArray);/*output of own utility reduc function*/
const reduceArray = array.reduce(sumReducer);
console.log(reduceArray);/*output of inbuilt reduce function*/