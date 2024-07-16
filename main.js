// type union literal 
// Union literals in TypeScript allow a variable to accept multiple
//  specific values, ensuring type safety by restricting the variable to a predefined set of values.
// Benefits
// Type Safety: Ensures only specific values are assigned.
// Code Clarity: Clearly specifies allowed values.
// Error Prevention: Prevents unintended values from being assigned.
var userName;
userName = "jaweriya";
console.log(userName);
userName = true;
console.log(userName);
// EX 2
var userAge;
userAge = 17;
console.log(userAge);
userAge = "17";
console.log(userAge);
//EX 3(
var age;
// age = 20;
age = "twenty";
if (typeof age === "string") {
    console.log(age.toUpperCase());
    // console.log(age.toLocaleLowerCase())
}
else {
    console.log('this is number');
}
var direction;
direction = 'north'; // Valid
console.log(direction);
direction = 'south'; // Valid
// direction = 'west';    // Invalid, 'west' is not part of the union literals
console.log(direction);
