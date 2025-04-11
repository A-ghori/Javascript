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



        // function printFarmInventory(cows, chickens) {
        //     let cowString = String(cows);
        //     while (cowString.length < 3) {
        //     cowString = "0" + cowString;
        //     }
        //     console.log(`${cowString} Cows`);
        //     let chickenString = String(chickens);
        //     while (chickenString.length < 3) {
        //     chickenString = "0" + chickenString;
        //     }
        //     console.log(`${chickenString} Chickens`);
            
        //     }
        //     printFarmInventory(7, 11);

// Arrow Functions some basic problems
const multiply = (a,b) => a * b; 
console.log(multiply(2, 3));

const add = (a,b) => {  return a + b }
console.log(add(2,3));

let person1 = {
        name : "Shubhayu",
        greet: function() {
                console.log("Hello" + this.name)
        }
}
let person = {
        name: "Shubhayu",
        greet: () => console.log("Hello " + person.name)
    };
    person.greet();

    function Person(name){
        this.name = name;
        this.sayName = () => console.log(this.name);
    }
    const person9 = new Person("Shubhayu Barua")
    person9.sayName()

const fruits = ["apple", "banana", "cherry"];
console.log(fruits)

const cities = ["Delhi", "Mumbai", "Kolkata"];
cities.push("Chennai");
cities[1]="Bangalore"
console.log(cities)
//Mumbai ommit due to array element using their index
// Here, an array named cities is created with three string elements: "Delhi", "Mumbai", and "Kolkata".

// Even though the array is declared with const, this only means you can't reassign the variable cities to another array; however, you can still change the individual elements inside the array.

const numbers = [1,2,3];        
// Add 3rd element
numbers.push (4);
// //Pop Last element
numbers.pop()
// //Remove first element
numbers.shift(2)
delete numbers[2]//The delete operator removes the element but leaves an empty slot (or undefined) in its place, which is usually not desired. Therefore, splice() is preferred for completely removing an element from the array.
console.log(numbers)

let numbers2 = [9, 8, 7];

numbers2.splice(1, 1);  // At index 1, remove 1 element
console.log(numbers2);  // Output: [9, 7]

const animals = ["Dogs","Cat","Elephant"];

for(let i=0; i<animals.length;i++){
        console.log(animals[i])
}

const numbers3 = [1, 2, 3, 4, 5, 6];

const evenNumbers3 = numbers3.filter(num => num % 2 === 0);

console.log(evenNumbers3);  // Output: [2, 4, 6]


const PriceinDollar = [10,20,30,40,50]
const PriceinRupess = PriceinDollar.map(price => price*83)
for(let i=0; i<PriceinRupess.length;i++){
console.log(PriceinRupess[i]); // Output: [830, 1660, 2490, 3320, 4150]
}

//Sort 
const numbers6 = [900,10,1000,200,5000,71000,14741000,44100,2,90000]
numbers6.sort((a,b)=> b-a)
console.log(numbers6)

const matrix = [
        [1, 2, 3],  // Row 0
        [4, 5, 6],  // Row 1
        [7, 8, 9]   // Row 2
    ];
    
    console.log(matrix[1][0]);  // Output: 4  (Row 1, Column 0) intersection jetate hbe setai likhbo 
    const column2 = matrix.map(row => row[1])
    console.log(column2)
    

//common number detection

const numbers7 = [1,2,3,2,4,5,66,66,78,3,9]
const UniqueNumbers = [...new Set(numbers7)];//new Set(numbers) is responsible for detecting and removing duplicate numbers.
console.log(UniqueNumbers);
    
const cube = [

        [  //layer 0
                [1,2,3],
                [4,5,6],
                [7,8,9]
        ],
        [  //layer 1
                [10,11,12],
                [13,14,15],
                [16,17,18]
        ]
];
    for (let layer =0; layer<cube.length; layer++){
        console.log(`Layer ${layer}:`);
        for (let row = 0; row<cube[layer].length; row++){
           for(let column=0;column<cube[layer][row].length; column++){
                console.log(`cube[${layer}] = ${cube[layer][row][column]}`)
           }
        }
    }
    const grid = [
        [10,20,30],
        [40,50,60],
        [70,80,90]
    ];
    for(let row=0; row<grid.length;row++)
        {
                for(let column=0;column<grid[row].length; column++)

                        console.log(`grid[${row}][${column}]=${grid[row][column]}`)
        }