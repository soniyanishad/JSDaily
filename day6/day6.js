
let rows=4;
for(let i=0;i<=rows;i++){
    let pattern="* ";
    for(let j=1;j<=i;j++){
        pattern+= "* ";
    }
    console.log(pattern);
}

// let rows=8;
// for(let i=1;i<=rows;i++){
//     let pattern="";
//     for(let j=1;j<=i;j++){
//         pattern+= J+"";
//     }
//     console.log(pattern);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }

let n=45, s= " ";

for(let i=1; i<=n; i++){
      if(i%3==0)
        s+=" Fizz";
    else if(i%5==0)
        s+=" Buzz";
    else
        s+=i;
}
console.log(s);