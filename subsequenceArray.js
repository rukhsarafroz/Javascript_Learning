/*validate subsequence from given arra */
function isValidSubsequence(array, sequence) {
    // Write your code here.
      let sequence_index = 0;
      array.map(ele => {
          if(ele === sequence[sequence_index]){
              sequence_index++;
          }
      })
      if(sequence_index === sequence.length){
          return true;
      }else{
          return false;
      }
  }
const array = [1,2,3,4];
const sequence = [1,3,4];
console.log(isValidSubsequence(array,sequence)); /*true*/