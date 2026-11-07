//stack memory

let ytname="CodeWithHarry";
let anothername= ytname;
anothername="CodeWithHarry2";

console.log(ytname); // Output: "CodeWithHarry"
console.log(anothername); // Output: "CodeWithHarry2"

//heap memory

let user1={name:"CodeWithHarry",age:30};
let user2=user1;
user2.name="CodeWithHarry2";

console.log(user1.name); // Output: "CodeWithHarry2"
console.log(user2.name); // Output: "CodeWithHarry2"
