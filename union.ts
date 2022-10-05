let cl = console.log;


// union :- we can assign more than one data type to a variable by using union

function Combine(num1:number | string , num2:number | string){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number"){
       result =  num1 + num2;
    }else{
        result = num1.toString() + num2.toString();
    }
    return result;
}
cl(Combine(100,200))
cl(Combine("Hello ","TS"));


// union :- we can assign more than one data type to avariable by using union

let x : string | number = 10;
x= "hello";
cl(x);

function combine(n1:number |string,n2:number | string){
    let result;

    if(typeof n1 === "number" && typeof n2 === "number"){
        result = n1+n2
    }else{
        result = n1.toString()+n2.toString()
    }
    cl(typeof result)
    return result
}
cl(combine(10,20))
cl(combine(10,"20"))




