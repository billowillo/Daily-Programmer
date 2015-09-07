//get input from user to run rule 90 on
var input = window.prompt("Input 1's and 0's");
console.log(input);
input = input.replace(/111|101|010|000/g," \n");
input = input.replace(/110|100|011|001/g,"x \n");
console.log(input);