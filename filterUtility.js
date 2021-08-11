/*write own implementation of filter function */
const array = [1,2,3,4,5];

function filter(arr, filterFunc){
    const filterArray = [];
    for(let i = 0; i < arr.length ; i++){
        const result = filterFunc(arr[i],i);
        if(result){
            filterArray.push(arr[i]);
        }
    }
    return filterArray
}

const newArray = filter(array, num => num % 2 === 0);
console.log(newArray);/*output of own filter utility*/
const filterArray = array.filter(num => num % 2 === 0);
console.log(filterArray);/*ouput of inbuilt filter function*/