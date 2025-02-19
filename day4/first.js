// Decision making
//1. if-else

// let x=5;

// if(x>10){
//     console.log("X is greater than 10");
    
// }
// else{
//     console.log("X is less than or equals to 10");
    
// }

// // If  remainder is 0,print the statement true...

// let num1=13;
// let num2=2

// if(num1%num2==0)
// {
//     console.log("true");
    
// }
// else
// {console.log("false");
// }

//prompt= it is dialog box to take input from user.It take input as string 

// let y=prompt("Enter number");
// let a=2;


// if(y%a==0)
//     {
//         console.log("true");
        
//     }
//     else
//     {console.log("false");
//     }

// //switch-statement

// //

// const marks=prompt("Enter your marks");

// let grade;

// switch(true){
//     case marks>=41 && marks<=50:
//           grade="A";
//              break;
//     case marks>=31 && marks<=40:
//          grade="B";
//         break;
//     case marks>=21 && marks<=30:
//          grade="C";
//          break;
//     case marks>=11 && marks<=10:
//         grade="E";
//         break;
//     default: grade="Invalid marks";

// }
// console.log(grade);

//Print the days of week..

const weeknum=prompt("Enter the week number");

let days;
switch(true){
    case weeknum==1:
        days="Monday";
        break;
    case weeknum==2:
         days="Tuesday";
         break;
      
         case weeknum==3:
            days="wednesday";
            break;

            case weeknum==4:
         days="Thursday";
         break;

         case weeknum==5:
         days="Friday";
         break;

         case weeknum==6:
         days="Saturday";
         break;

         case weeknum==7:
         days="Sunday";
         break;

default: days= "Invalid Week number";

}
console.log(days);





