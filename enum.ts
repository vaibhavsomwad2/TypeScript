let cl =console.log;

// enum


// enum Role {Candidate = "c", Admin_Hr = "Ad", Super_Admin = "sup"}
// let person={
//     fname : "jhone",
//     lname:"doe",
//     age : 33,
//     token : 'JWT',
//     // role : Role.Candidate
//     // role : Role.Admin_Hr
//     role : Role.Super_Admin
// }
// cl(Role.Candidate)
// cl(Role.Admin_Hr)
// cl(Role.Super_Admin)

// if(person.role === Role.Candidate){
//     cl("candidate")
// }

// if(person.role === Role.Admin_Hr){
//     cl("Admin_Hr");
// }

// if(person.role === Role.Super_Admin){
//     cl("Super_Admin_Hr")
// }

enum Role {Candidate = 100, Admin_Hr , Super_Admin }
let person = {
    fname : "jhone",
    lname:"doe",
    age : 33,
    token : 'JWT',
    // role : Role.Candidate
    // role : Role.Admin_Hr
    role : Role.Super_Admin
}
cl(Role.Candidate) // 100
cl(Role.Admin_Hr) // 101
cl(Role.Super_Admin) // 102

if(person.role === Role.Candidate){
    cl("candidate")
}

if(person.role === Role.Admin_Hr){
    cl("Admin_Hr");
}

if(person.role === Role.Super_Admin){
    cl("Super_Admin_Hr")                 // Super_Admin_Hr
}