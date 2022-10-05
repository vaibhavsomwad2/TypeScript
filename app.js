var cl = console.log;
// literal type
// function combine(num1:number | string, num2:number | string, rsultcombination : string){
//     let result;
//     if(typeof num1 === "number" &&  typeof num2==="number"){
//        result = num1+ num2
//     }else{
//         result = num1.toString() + num2.toString()
//     }
//     if(rsultcombination === "as-number"){
//         return +result
//     }else{
//         return result.toString();
//     }
//     }
// let comp1 = combine(10,30,"as-number")
// cl(comp1,typeof comp1)
// let comp2 = combine("10",'30',"as-number")
// cl(comp2,typeof comp2)
function combine(num1, num2, rsultcombination) {
    var result;
    if ((typeof num1 === "number" && typeof num2 === "number") || rsultcombination === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    // if(rsultcombination === "as-number"){
    //     return +result
    // }else{
    //     return result.toString();
    // }
    return result;
}
var comp1 = combine(10, 30, "as-number");
cl(comp1, typeof comp1);
var comp2 = combine("10", '30', "as-number");
cl(comp2, typeof comp2);
var comp3 = combine("ravi", "kiran", "as-string");
cl(comp3, typeof comp3);
// ================= =       literal     ===============================================
function Combine(n1, n2, resultcombine) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultcombine === "as-number") {
        result = +result;
    }
    else {
        result = result.toString();
    }
    // cl(typeof result)
    return result;
}
var comp = Combine(10, 20, "as-string"); // 10 + 20 = 30 typeof - number ? string
cl(comp, typeof comp);
var comp4 = Combine(10, "20", "as-number"); // 10 + 20 = 30 typeof - string ? number
cl(comp4, typeof comp4);
