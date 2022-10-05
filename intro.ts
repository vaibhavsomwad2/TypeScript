let cl = console.log;


let num1 = document.getElementById("num1")! as HTMLInputElement;
let num2 = document.getElementById("num2")! as HTMLInputElement;
let add = document.getElementById("add")!;

function Addition(n1:number,n2:number){
    return n1+n2
}

add.addEventListener("click",()=>{
    cl(Addition(+num1.value, +num2.value))
})

