// Day 1
console.log("Hi Coding World");

let animal = "cat";
console.log(`My ${animal} is called Lila`);

//Task1

let name = "Marcus";
let age = 1;
let favoriteColor = "navy";

console.log("My little boy's name is " + name + ". He is " + age + " year old and he loves " + favoriteColor + " colour." );

// Task 2

let intro1 = "Today's meals:";
let breakfast = "porridge,";
let lunch = "pizza,";
let dinner = "soup.";

console.log(intro1, breakfast, lunch, dinner);

let intro2 = "Tomorrow's meals:";
breakfast = "sandwich,";
lunch = "pasta,";
dinner = "rice.";

console.log(intro2, breakfast, lunch, dinner);

// Task 3

let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
let myBirth = new Date(1992, 7, 21);
let today = new Date(2021, 5, 5);

let diffDays = Math.round(Math.abs((myBirth - today) / oneDay));

console.log(diffDays);

// Task 4

let b1 = "x";
let b2 = "o";
let b3 = " ";
let b4 = "|";
let b5 = "-";

console.log(b3, b3, b3, b4, b3, b3, b3, b4, b3, b3, b3);
console.log(b3, b1, b3, b4, b3, b2, b3, b4, b3, b3, b3);
console.log(b3, b3, b3, b4, b3, b3, b3, b4 ,b3, b3, b3);
console.log(b5, b5, b5, b5, b5, b5, b5, b5, b5, b5, b5);
console.log(b3, b3, b3, b4, b3, b3, b3, b4, b3, b3, b3);
console.log(b3, b1, b3, b4, b3, b1, b3, b4, b3, b3, b3);
console.log(b3, b3, b3, b4, b3, b3, b3, b4, b3, b3, b3);
console.log(b5, b5, b5, b5, b5, b5, b5, b5, b5, b5, b5);
console.log(b3, b3, b3, b4, b3, b3, b3, b4, b3, b3, b3);
console.log(b3, b2, b3, b4, b3, b3, b3, b4, b3, b3, b3);
console.log(b3, b3, b3, b4, b3, b3, b3, b4, b3, b3, b3);

// Task 5

let a = 4;
let b = 8; 
let c = b - a 
let d = b * a; 
let e = b / a; 
let f = a + b; 
let g = a++; 
let h = b--; 
let i = a ** 2; 

let j = 7; 
let k = 3; 
let l = j % k; 

console.log(c, d, e, f, g, h, i, j, k, l)

