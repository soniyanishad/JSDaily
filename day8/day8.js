
//Array

let arr = [1,2,3,4,5,6];
console.log(arr);

console.log(arr.length);

//Methods
//Push - Adds an element to the end of the array

const arr1=["Hello", "India"];
let res=arr1.push("& world");
console.log(arr1);

const arr2=["Jarvis","The","Developer"];
let res2=arr2.slice(1,2);
console.log(res2); //The


const arr3=["Hello", "India","And","World"];
let res3=arr3.toString();
console.log(res3);//Hello,India,And,World

//shift method is used to remove the first element from an array and returns that removed element.
const arr4=["Hello", "India","And","World"];
let res4=arr4.shift();
console.log(arr4);//India,And,World

//map method creates a new array with the results of calling a provided function on every element in the calling array.

let arr5=[1,2,3,4,5,6];
let res5=arr5.map(x=>x*2);
console.log(res5); //2,4,6,8,10,12

//pop method removes the last element from an array and returns that element.
let arr6=[1,2,3,4,5,6];
let res6=arr6.pop();
console.log(arr6);//1,2,3,4,5

//filter

const arr7=["Jarvis","The","Developer"];
let res7=arr7.filter(word=>word.length>3);
console.log(res7); //jarvis,developer

let arr8=[1,2,3,4,5,7,6];
// let res8=arr8.findIndex(x=> x==2);
// let res8=arr8.reverse();
// let res8=arr8.sort();//sorts the array in ascending order
// let res8=arr8.splice(2,3);
// let res8=arr8.unshift(1,2); //unshift adds elements to the beginning of the array
let res8= delete(arr8[3]);//deletes the element at the specified index
console.log(arr8);



