//function (resuable code)
//1.Regular function-mostly used in js
//2.Arrow function
//3.Function expression

//1.Regular function
//syntax
function a(){
    console.log("a");
}
a();
a();
a();// we can call function multiple times

//2.Arrow function
//syntax
 const p= ()=>{
     console.log("This is arrow function");
     
 }
 p();

 //3.Function expression
 //syntax
 const q=function(){
    console.log("q");
    
 }
    q();

    //when we pass the value to function it is called as parameter
    //when we get the value from function it is called as argument

    function xyz(a,b){
        console.log(a,b);
        
    }
    xyz(10,20);// function with parameters and with returns

    // function showMessage(){
    //     alert("Hello everyone");
    // }
    // showMessage();

    //you are provided with a string you have to slice the name from the string
    function Name1(){
        let str="Hi Prepbytes";
        console.log(str.slice(3,12));
        
    };
    Name1();

    let arr=[1,2,3,4,5];
    let sum=0;
        for(let i=0;i<arr.length;i++)
            {
                sum+=arr[i];
            }

    console.log(sum);
    
