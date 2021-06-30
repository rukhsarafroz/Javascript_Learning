/* return all the digit which is > 23 && <9 */
let array = [2,4,6,7,44,23,20];
let map = array.map(i => {if(i>23 && i<9) return i});
console.log(map);
/* Output: [undefined,undefined,undefined,undefined,undefined,undefined,undefined] */