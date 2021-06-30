/* Change the word case in pascal */
function changeCase(str){
    let str1 = str.split("_");
    let str2 = '';
     for(let i=0;i<str1.length;i++){
        str2+= str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
      }
    return str2;
}
let str = "change_this_string_to_pascal_case";
const result = changeCase(str);
console.log(result);
/* Output: ChangeThisStringToPascalCase */