

 // Task 2

 for( i = 0; i < 6; i++){
    console.log(Math.random() * 49 + 1);
   };
// Task 3
   for( i = 9; i > -1; i--){
    console.log(i);
   };

// Task 1  +  Task 4

let myArr = ["Legally Blonde", "Harry Potter", "50 First Dates"];
myArr.push("Cast away", "Avatar");
for(let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

film = "ghostbusters";
function filmChecker() {
    if(myArr[2] == "Ghostbusters") {
        console.log("yey it’s ghostbusters")
    }
    else {
        console.log("booo, we want ghostbusters");
    }
}

filmChecker(film);

// Task 5 
/*Create a variable, generate a random number 
between 1 and 30 six times, each random number 
generated, check if this number of divisible by 7 or not*/

let multiSeven = [];
  for(i = 1; i < 30; i++) {
      let randNum = Math.round(Math.random() * 6)
      multiSeven.push(i);
  if(i % 7 == 0) {
      console.log(`${randNum} is divisable by 7`)
  }
  else {
      console.log(`nope, ${randNum} is not divisible by 7`);
  }
  }
  console.log("Hello");
  
