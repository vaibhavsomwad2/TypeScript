let cl = console.log;
// ==================       type aliase          =============================  

type Combionation = string | number;
type resultcombination = "as-number" | "as-string"

function Combine(n1:Combionation,n2:Combionation,resultcombine:resultcombination){
let result;
if(typeof n1 === "number" && typeof n2 === "number"){
    result = +n1 + +n2
}else{
    result = n1.toString() + n2.toString()
}
if(resultcombine === "as-number"){
    result = +result
}else{
    result = result.toString()
}
return result
}

let Comp1 = Combine(10,20,"as-string");
cl(Comp1, typeof Comp1);

let Comp2 = Combine(10,"10","as-number")
cl(Comp2, typeof Comp2);