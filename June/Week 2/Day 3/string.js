// rest loop
// for in loop
// for of loop

// create a object
let obj={
    name: "xyz",
    age: 20,
}

console.log(obj.name); 
console.log(obj.age); 

console.log(obj["name"]);
console.log(obj["age"]);

obj.name = "y";
console.log(obj.name);


// create a array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);


// for in loop
for (let key in obj) {
    console.log(obj[key]);
}

for (let idx in arr) {
    console.log(arr[idx]);
}

console.log("for of loops");
// for of loop
for (const element of arr) {
    console.log(element);
}

// for (let ele of obj) { 
//     console.log(ele); 
// } 


// string
let str ="Qlith";
// let str2 = 'Qlith';
// let str3 = `Qlith`;

console.log(str[1]); // l 

str[1] = "a"; // strings are immutable
console.log(str[1]); // l

// properties of string
console.log(str.length); // 5
// methods
// 1. toUpperCase()
// 2. toLowerCase()
// 3.trim()
// 4. slice()
// 5. substring()
// 6. replace()
// 7. concat()

console.log(str.toLowerCase()); 
console.log(str.toUpperCase());
console.log(str.trim().length); // removes whitespace from both ends
console.log(str.slice(0,3)); 
console.log(str.substring(0,3)); // same as slice but doesn't accept negative indices

console.log("Qlith "+"innovation");
console.log("Qlith ".concat("innovation")); 

console.log(str.replace("Q", "E")); // replaces first occurrence
console.log(str);

// array methods
// 1. push() 
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. splice()
// 6. slice()

let arr1 = [1, 2, 3, 4, 5,6];
console.log(arr1)
arr1.push(7,8); // adds to the end
console.log(arr1); 
arr1.pop(); 
console.log(arr1); 

// to add or remove from the first
arr1.unshift(0); // adds to the first
console.log(arr1);
arr1.shift(); // removes first element
console.log(arr1);

// length property
console.log(arr1.length); // 7

console.log(arr1.slice(0, 4)); // returns a new array from index 1 to 3

arr1.splice(2,2,30);
console.log(arr1); // removes 2 elements from index 2 and adds 30 in their place 

// TASK:1
// 1. Create an array to store companies
let arr2 = ["Bloomberg","Microsoft", "Uber", "Google", "IBM", "Netflix"] ;
arr2.shift(); 
console.log(arr2); 
// remove Uber & add ola 
arr2.splice(1, 1, "Ola");
console.log(arr2);
// add amazon at the end
arr2.push("Amazon");
console.log(arr2);



