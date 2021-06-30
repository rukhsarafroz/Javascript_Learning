/*functions:
push: insert element into stack
pop: remove top element from stack
peek : displaying top element of satck
length: length of the stack
*/
//We can use array as a stack
let letters = []; //this is our stack
let word = "racecar";
let rword = "";

//push letters of word into stack
for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
}
//pop each letter of word from stack and append into rword
for(let i = 0; i < word.length; i++){
    rword += letters.pop();
}
if(word === rword){
    console.log(word + " is a palindrome");
}else{
    console.log(word + " is not a palindrome")
}