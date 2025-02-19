//loops
//for loop


const n=5;
for(let i=1;i<=n;i++)
    {
        console.log("I am Programmer");
        
    }

    // for in loop  for(key in object){}

    const person={
        name:'John',
        age:30,
        city:'New York'
    };
    for(let key in person)
    {
        //console.log(key,person[key]);
        console.log(`${key}:${person[key]}`);
        
    }

    ///
    let x=3;

    for(let i=1;i<=10;i++){
        console.log(`${x}*${i}=${x*i}`);
    }

    //while loop

    let i=1;
    while(i<=10)
    {
        console.log(i);
        i++;
    }

    //do while loop
   let i1=1;
    do{
         console.log("Value is",i1);
         i1++;
    }while(i1<=10);