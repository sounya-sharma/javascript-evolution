console.log('Hello, Java Script!');
// This is a simple JavaScript file that logs a message to the console.//
//STARTING JS NOW with a pyramid generator i.e..,A pyramid generator is a program where you can set the type of character, the count for the pyramid, and the direction of the pyramid. The program will then generate a pyramid based on those inputs.//
 console.log('Starting Pyramid Generator...');
 console.log("       #       ");
 console.log("      ###      ");
 console.log("     #####     "); 
 console.log("    #######     ");
 // variable vessel//
 let class;
 //initialization//
 let class= 'pyramid';
 // immutable string but variable value can be chnaged//
 class='bca';
//adding it to the console for output//
let developer= "Sounya";
console.log('developer');
// once the value is added to the console u can re assign it without using yhe "let" keyword again//
developer='sawnya';
//variable constraint: camel case eg (let myClassName = "bca";)//
let newDeveloper;
newDeveloper = 'Sounya';//unitialization and assignment in one line
// can swap the value of the variable by using the assignment operator//
let newDeveloper = developer; //output of newDeveloper will be "sawnya//"
//"number" datatype used://
let count = 8;
//mathematical operations are possible via console//
console.log(count +10);  //output will be 18." *,/,- "cane be used too//
//non primitve datatype-"Array" uses square brackets []//
let arr = []; //empty array//
//initialization and assignment in one line//
let arr = ["first","second","third"];
//to access the elements of the array, we use the index number starting from 0//
console.log(arr[1]); //output will be "second"//)
//arrays are mutable/changeable via index number//
arr[1] = "newSecond"; //changing the value of the second element
console.log(arr[1]); //output will be "newSecond"//
// in case of unknown size of the array, we use the array.length - 1 to get to the last element of the array//
arr[arr.lentgh - 1] = "newLast"; //changing the value of the last element
console.log(arr[arr.length - 1]); //output will be "newLast"//
//pusgh() method is used to add an element to the end of the array//
arr.push("fourth"); //adding a new element to the end of the array
console.log(arr); //output will be ["first", "newSecond", "third", "fourth"]//
//the value to a variable can be reassigned by usign "let" keyword//
let var = "old value";
console.log(var); //output will be "old value"
var = "new value"; //reassigning the value
console.log(var); //output will be "new value"
//to avoid this we use the keyword "const" which is used to declare a constant variable that cannot be reassigned//
const newvar = "constant answer value";
console.log(newvar); //output will be "constant answer value"//
// a const variable cant be left uninitialized, it must be assigned a value at the time of declaration//
//format for a loop://
for (let iterator;condition;iterator) {
    //code to be executed for each iteration
}   
//function//
function name(parameter):{
    //code to be executed
}
//func returning a val as well as printing a msg to the console//
function name (parameter) {
    return "learning functions";
    console.log('Function executed with parameter:', parameter);
}
//function call//
funcName(parameter);
//basics to initiate the code for a pyramid generator in js//
const character = '#'; //character to be used for the pyramid //
const count = 8; //number of rows in the pyramid //
const rows = []; //array to store the rows of the pyramid //
for ( let i = 0; i < count; i = i + 1){
    rows.push(character.repeat(i+1)); //making it start from 1 to eliminate the off-by-one error in js //
}
// if a function doesnt return a val it will return undefined by default //
function pyramid(lines) {
    return lines;
}//can call the parameters as well which can be called to use diff values//
//passing an argument tothe function//
function pyramid(rows){
    return rows;
}
pyramid("lines"); //lines passed as an arguement 
//function to add two numbers//
function addTwoNumbers(a, b){
  return a + b ;
}
let sum = addTwoNumbers(5,10);
console.log(sum); //output will be 15 
//function can use variables which are kept outisde any blocks(global variables)//
const title = "Professor ";
function demo(name) {
  return title + name;
}
demo("Naomi"); //output will be "Professor Naomi"
// the return keyword stops the execution of your code inside a function or a block statement.
// This means any code after a return statement will not run.
function padRow(rowNumber, rowCount) { //two new paramteres added to the function to control the row number and count
return character.repeat(rowNumber); //repeating the character "#" the "rowNumber" of times as given by the user
}
//pyramid generator function that takes the character, count, and direction as parameters
function pyramidGenerator(character, count, direction) {
  const rows = []; //array to store the rows of the pyramid
  for (let i = 0; i < count; i++) {
    let row = padRow(i, count); //calling the padRow function to get the row with the correct number of characters
    if (direction === 'right') {
      row = row.padStart(count); //right-aligning the row
    } else if (direction === 'left') {
      row = row.padEnd(count); //left-aligning the row
    }
    rows.push(row);//adding the row to the rows array
  }
  return rows.join('\n'); //joining the rows with a newline character
}