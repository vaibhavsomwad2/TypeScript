let cl = console.log;

// tuples :- it is array of fixed length 

// userRole :- Role_Id > Role_name > Cansee_companyJOb > canSee_Candidate > CanSee_candidateAndCompanyjob
// candidate  :- 1 , "candidate" , true , false , false
// Admin      :- 2 , "Admin"   , false , true , false
// superadmin :- 3 , "superadmin" , true , true , true

let person : {name:string,age:number,hobbies:string[],email:string,role:[number,string,boolean,boolean,boolean]}={
    name : "ravikiran",
    age:33,
    email:"ravikiran@gmial.com",
    hobbies : ["coding","cooking","circket"],
    role :[1,"Admin",false,true,false]
}
// person.role.push("hello")  :- one is drawaback 
cl(person.role);

let fav8Activiteise:string[] = ["coding","cooking","circket"];

fav8Activiteise.push("100")

for(let activity of fav8Activiteise){
    cl(activity.toUpperCase())
}

for(let hobby of person.hobbies){
    cl(hobby)
}

// person.role[0] = "SuperAdmin" error through
// person.role[1] =11111; // error through
cl(person);
