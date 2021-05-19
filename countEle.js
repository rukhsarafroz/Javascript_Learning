function countElement(array){
    let temp={ };
    for(let elem in array){
        let num = array[elem];
        temp[num]=temp[num] ? temp[num]+1 : 1;
    }
    console.log(temp);
}
let array=[1,2,3,1,2,4,5,1,6,1,3,2];
countElement(array);