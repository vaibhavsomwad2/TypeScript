let cl = console.log;

let x = 10;
cl(x);

let y:string;
// y= 10;
y = "hello";
// y = true
cl(y);

let person:{fname : string, lname :string,age : number,} = {
    fname : "vr",
    lname:"reddy",
    age :33
}
// person.fname=123; error through
cl(person);


let car :{
    engineType : string,
    mily : number,
    price : number,
    autodrive : boolean,
    stroke : string
} = {
    engineType : "petrol",
    price : 11111,
    stroke : "4 stroke",
    mily : 25,
    autodrive :true
}
cl(car);


// function add(n1:number, n2:number){
//     return n1+n2
// }
// cl(add(10,20))

// function add(n1:number, n2:number,shoeResult:boolean){
//     if(shoeResult === true){
//         cl(n1+n2)
//     }else{
//         return n1+n2
//     }
   
// }
// // cl(add(10,20,true))
// let result = add(100,200,false);
// cl(result)

function add(n1:number,n2:number,shoeResult:boolean,phrase:string){
    if(shoeResult===true){
        cl(`${phrase} ${n1+n2}`)
    }else{
        return `${phrase} ${n1+n2}`
    }
}
cl(add(100,200,true,"the result is"))
cl(add(10,20,false,"the result is"));

let skills:string[];
skills = ["HTML5","CSS3","JAVASCRIPT","ANGULAR10"];
skills.splice(3,0,"typescript","bootsrap@4");
// skills.pop("ff") this is drown back the is code error through
cl(skills);

// for(let skill of skills){
//     cl(`i love ${skill}`)
// }                      // it is  print of value


// for(let person1 in person){
//     cl(person1)
// }                    // this is print of keys


// for(let skill in skills){
//     cl(skill)
// }                     // this is print of keys


