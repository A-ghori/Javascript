// let mode = "darkmode";  
// let color ;
// if(mode === "darkmode"){
//     color = "black";
// }if (mode === "lightmode"){
//     color = "white";
// }
// console.log(color);

// CHECK IF THE NUMBER IS POSTIVE 
// const number = prompt("Enter a number");
// if (number>0){
//     console.log("The number is postive");
//     console.log("Its a nice number");
// }else{
// console.log("The number is negative");
// }
    
// const rating = prompt ("Enter your Rating");
// if (rating <=2){
//     console.log("Bad Rating");

// }
// else if (rating >=4){
//     console.log("Good Rating");
// }
// else{
//     console.log("Average Rating");
// }

// const marks = prompt ("Enter your marks");
// if (marks >=40){
//     // inner if...else statement
//     // Distinction if marks is 80 or above
//     if(marks>=80){
// console.log("Distinction");
//     }
// else{
//     console.log("Passed");
// }
// }
// else{
//     console.log("Failed");
// }

// FOR LOOP 
// const cars = prompt("Enter your cars");
// let text = "";
// for (let i = 0; i<cars.length; i++){
//     text+= cars[i];
// }
// console.log(text);
// i   cars[i]	 text before	     Operation (text += cars[i])	 text after
// 0	'A'	       ""	                        "" + 'A'	         "A"
// 1	'B'	       "A"	                        "A" + 'B'	         "AB"
// 2	'C'	       "AB"	                    "AB" + 'C'	             "ABC"
// const i = prompt ("Enter a number");
// let text ="";

// for (let i = 0; i<10; i++){
//     text += "The number is " + i 
// }
// console.log(text);  
// let luigiDebt = 140;
// luigiDebt = luigiDebt - 35;
// console.log(luigiDebt);
// console.log(Math.max(2, 4));

// let number = prompt("Pick a number");
// if (!isNaN(number)){ // Nan = not a number
//     console.log("Your Number is the square root of"+ number*number)
// } else{
//     console.log("Hey. That's not a number");
// }

// let number = 0 ;
// while (number<=12){
//     console.log(number);
//     number = number + 2;
// }

// let i = 0 ;
// for (i=0;i<=12; i=i+2){
//     console.log (i," is the number");

// }

// let result = 1;
// let counter = 0;
// for (counter = 0; counter<10; counter=counter+1){
//     result =result*2;
// }
// console.log(counter," is the Counter");
// console.log(result," is the Result");

// var yourName = prompt("Enter your name");
// if (yourName === "Shubhayu" || yourName === "Rohit" || yourName === "Amit") {
//     console.log("Hello from if  " + yourName);
// } else if (yourName === "Sanjib" || yourName === "Bablu" || yourName === "Suman") {
//     console.log("Hello from else if " + yourName);
// } else {
//     console.log("Hello Stranger");
// }

// if ( false != true) {
//     console.log("That makes sense.");
//     if (1 < 2) {
//     console.log("No surprise there.");
//     }
//     }

// switch (prompt("What is the weather like?")) {
//     case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//     case "sunny":
//     console.log("Dress lightly.");
//     case "cloudy":
//     console.log("Go outside.");
//     break;
//     default:
//     console.log("Unknown weather type!");
//     break;
//     }

// let size = 8;
// let pattern = "";
// for( i=0; i<size; i++){
//     pattern = pattern + "# # # #\n";
// }
// console.log(pattern);


// let size = 8;
// let pattern = "";
// for(i=0; i<size; i--){
    
// }

// const square = function(x){
//     return x*x;
// };
// console.log(square(5));

// const y = function(z){
//     return z**z;
// }
// console.log(y(3));

// const makeNoise = function(){
//     console.log("Pling!");
// }
// makeNoise();

// const roundTo = function(n,m){
//     let remainder = n%m;
// return n-remainder + (remainder < m / 2 ? 0 : m); 
// }
// console.log(roundTo(23,10))

// let age = 15;
// let canVote = age>14 ? true : false;
// console.log(canVote);


// const h = function(factor){
//     const ingredient = function(amount, unit, name){
// let ingredientAmount = amount*factor;
// if (ingredientAmount >1){
//     unit = unit + "s";
// }
// console.log(`${ingredientAmount} ${unit} ${name}`);
// };
// ingredient(1, "can", "chickpeas");
// ingredient(2, "cup", "chicken stoo");
// ingredient(3, "cup", "tahini");
// ingredient(4, "cup", "lemon");
// ingredient(5, "clove", "garlic");
// ingredient(6, "teaspoon", "olive oil");
// }

// h(2);
//  const safeMode = prompt("Order?");
// let missileLaunch = function(){
// };
// if (safeMode === "yes") {
//  missileLaunch = function(){
//     console.log("Launch the missile");
//  }

// }else{
// missileLaunch = function(){
//         console.log("Launch is aborted");
//     }
// }

// missileLaunch();

// const missileSystem = {
//     launch: function(time) {
//         console.log(`Missile launched at ${time}`);
//     }
// };

// let missileLaunch = function() {
//     missileSystem.launch("now"); // Now it works!
// };

// missileLaunch();

// const missileLaunch = function(){
//     missileSystem.launch("now");
// }
// let missileSystem = {
//     launch : function(time){
//         console.log(`Missile launched at ${time}`);
//     }
// }
// missileLaunch();


// chicken=()=>{
// return console.log("egg");
// };
// chicken();
// CALL STACK AND RECURSION
// function chicken() {
//     return egg();
//     }

//     function egg() {
//     return chicken();
//     }
//     console.log(chicken() + " came first.");
    // → ?? MAximum call stack size exceeded 😂 because of infine loop 

    // function hello() {
    //     console.log("Hello");
    //     hello();
    // }
    
    // hello();
    // for (let i = 0; i <= 10; i++) {
    //     console.log("Hello", i);
    // }
    // 
    

    // function findSolution(target) {
    //     function find(current, history) {
    //     if (current == target) {
    //     return history;
    //     } else if (current > target) {
    //     return null;
    //     } else {
    //     return find(current + 5, `(${history} + 5)`) ??
        // [Understanding the ?? Operator]
// The ?? (Nullish Coalescing Operator) works like this:

// It tries the first function call: find(current + 5, ...)

// If that call returns null (failure), it tries find(current * 3, ...).

// So, Addition (+5) is always attempted first!
// But if it doesn’t find a solution, we then try Multiplication (*3).
        // find(current * 3, `(${history} * 3)`);
        // }
        // }
        // return find(1, "1");
        // }
        // console.log(findSolution(24));



        function printFarmInventory(cows, chickens) {
            let cowString = String(cows);
            while (cowString.length < 3) {
            cowString = "0" + cowString;
            }
            console.log(`${cowString} Cows`);
            let chickenString = String(chickens);
            while (chickenString.length < 3) {
            chickenString = "0" + chickenString;
            }
            console.log(`${chickenString} Chickens`);
            
            }
            printFarmInventory(7, 11);