/* Created own iterator */
function myIterators(start, finish){
    let index = start;
    let count = 0;
    return{
        next(){
            if(index < finish){
                const result = { value : index, done : false};
                index += 1;
                count++;
                return result;
            }
            return{
                value : count,
                done : true
            }
        }
    }
}
const it = myIterators(0,10);
let result = it.next();
while(!result.done){
    console.log(result.value);
    result = it.next();
}