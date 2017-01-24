//Arrow Example
Person((name) => { this.name=name; }) ;
Person=((arr) =>   {arr.map(character) => {this.name+character; }});

//Destructing Example
let obj={firstName:"John",lastName:"Conor",dateOfBirth:"26/03/1990"};
let { firstName:first,lastName:last,dateOfBirth:dob }= obj;
console.log("Firstname:"first);

//Destructing Arrays
let foo=["one","two","three"];
let [one,two,three]=foo;
console.log("The one array stores:"+one);


// Replace IIFEs with Blocks  example:
(function () {   user= {name:"John",age:25,dob:"12/12/2012"}; console.log(`name of user ${user.name}`); }() );
console.log("name of user"+user.name);
