//string

var num="I am developer and designer and designer";
let result= num.lastIndexOf("designer",20); // if we write Developer it will return -1
console.log(result);
//lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
//indexOf() method returns the position of the first occurrence of a specified value in a string.
//lastIndexOf() method returns -1 if the value to search for never occurs.
//indexOf() method returns -1 if the value to search for never occurs.


//string methods
//1. String concat() Method

var str1 = "Prep";
var str2="Bytes";
var res=str1.concat(str2);
console.log(res);

//2. slice() Method

var str = "Apple, Banana, Kiwi";
let res1 = str.slice(7, -6);
console.log(res1);
//if we add negative value in slice() method it will count from the end of the string.

//3.substring() Method

var str2=" Hello My Name is Soniya";
let res2=str2.substring(6,12);
console.log(res2);
//substring() method is similar to slice() method but it does not accept negative values.

//4. replace() Method

var str3="Hello World Wide Web";
// console.log(str3);
let res3=str3.replaceAll("W","w");
console.log(res3);
//replace() method replaces a specified value with another value in a string.
//replaceAll() method replaces all occurrences of a specified value with another value in a string

//trim() Method

var str4="    Hello World    ";
let res4=str4.trim();
console.log(res4);
//trim() method removes whitespace from both sides of a string.

//split() Method

let num1="1, 2, 3, 4, 5, 6,7,8";
let res5=num1.split("6");
console.log(res5);
//split() method is used to split a string into an array of substrings, and returns the new array.

//length() Method
var str5="I am Developer";
let res6=str5.length;
console.log(res6);
//length() method returns the length of a string.