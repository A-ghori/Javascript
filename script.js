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
// const multiply = (a,b) => a * b; 
// console.log(multiply(2, 3));

// const add = (a,b) => {  return a + b }
// console.log(add(2,3));

// let person1 = {
//         name : "Shubhayu",
//         greet: function() {
//                 console.log("Hello" + this.name)
//         }
// }
// let person = {
//         name: "Shubhayu",
//         greet: () => console.log("Hello " + person.name)
//     };
//     person.greet();

//     function Person(name){
//         this.name = name;
//         this.sayName = () => console.log(this.name);
//     }
//     const person9 = new Person("Shubhayu Barua")
//     person9.sayName()

// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits)

// const cities = ["Delhi", "Mumbai", "Kolkata"];
// cities.push("Chennai");
// cities[1]="Bangalore"
// console.log(cities)
// //Mumbai ommit due to array element using their index
// // Here, an array named cities is created with three string elements: "Delhi", "Mumbai", and "Kolkata".

// // Even though the array is declared with const, this only means you can't reassign the variable cities to another array; however, you can still change the individual elements inside the array.

// const numbers = [1,2,3];        
// // Add 3rd element
// numbers.push (4);
// // //Pop Last element
// numbers.pop()
// // //Remove first element
// numbers.shift(2)
// delete numbers[2]//The delete operator removes the element but leaves an empty slot (or undefined) in its place, which is usually not desired. Therefore, splice() is preferred for completely removing an element from the array.
// console.log(numbers)

// let numbers2 = [9, 8, 7];

// numbers2.splice(1, 1);  // At index 1, remove 1 element
// console.log(numbers2);  // Output: [9, 7]

// const animals = ["Dogs","Cat","Elephant"];

// for(let i=0; i<animals.length;i++){
//         console.log(animals[i])
// }

// const numbers3 = [1, 2, 3, 4, 5, 6];

// const evenNumbers3 = numbers3.filter(num => num % 2 === 0);

// console.log(evenNumbers3);  // Output: [2, 4, 6]


// const PriceinDollar = [10,20,30,40,50]
// const PriceinRupess = PriceinDollar.map(price => price*83)
// for(let i=0; i<PriceinRupess.length;i++){
// console.log(PriceinRupess[i]); // Output: [830, 1660, 2490, 3320, 4150]
// }

// //Sort 
// const numbers6 = [900,10,1000,200,5000,71000,14741000,44100,2,90000]
// numbers6.sort((a,b)=> b-a)
// console.log(numbers6)

// const matrix = [
//         [1, 2, 3],  // Row 0
//         [4, 5, 6],  // Row 1
//         [7, 8, 9]   // Row 2
//     ];
    
//     console.log(matrix[1][0]);  // Output: 4  (Row 1, Column 0) intersection jetate hbe setai likhbo 
//     const column2 = matrix.map(row => row[1])
//     console.log(column2)
    

// //common number detection

// const numbers7 = [1,2,3,2,4,5,66,66,78,3,9]
// const UniqueNumbers = [...new Set(numbers7)];//new Set(numbers) is responsible for detecting and removing duplicate numbers.
// console.log(UniqueNumbers);
    
// const cube = [

//         [  //layer 0
//                 [1,2,3],
//                 [4,5,6],
//                 [7,8,9]
//         ],
//         [  //layer 1
//                 [10,11,12],
//                 [13,14,15],
//                 [16,17,18]
//         ]
// ];
//     for (let layer =0; layer<cube.length; layer++){
//         console.log(`Layer ${layer}:`);
//         for (let row = 0; row<cube[layer].length; row++){
//            for(let column=0;column<cube[layer][row].length; column++){
//                 console.log(`cube[${layer}] = ${cube[layer][row][column]}`)
//            }
//         }
//     }
//     const grid = [
//         [10,20,30],
//         [40,50,60],
//         [70,80,90]
//     ];
//     for(let row=0; row<grid.length;row++)
//         {
//                 for(let column=0;column<grid[row].length; column++)

//                         console.log(`grid[${row}][${column}]=${grid[row][column]}`)
//         }

        //Maps exapmle

//         const Prices = [100,200,300]
//         const withTax = Prices.map( price => price+10)
//         console.log(withTax)

// const nums = [1,2,3,4]
// const doubled = nums.map(num => num*2)
// console.log(doubled)

// const numbers = [1, 2, 3, 4, 5];                
// const plusOne = numbers.map(n=>n+1)
// console.log(plusOne)

// const fruits = [`apple`,`bannana`,`mango`]
// const upperFruits = fruits.map(fruits => fruits.toUpperCase())
// console.log(upperFruits); //['APPLE', 'BANNANA', 'MANGO'] for topperUpperCase

// const names = ["SHubhayu","Aura","Javascript"]
// const lengths= names.map(name=>name.length);
// console.log(lengths)//[8, 4, 10]


// //GPA Calculator
// const GradePointsTo =[
//        { subject1:"Math", grade: "A" },
// {subject2:"English", grade: "B" },
// {subject3:"Science", grade: "C" },
// ]

// const GradePoints = {
//         A: 4,
//         B : 3,
//         C:2 ,
//         D: 6,
//         F: 0,
// };

// const Grades= GradePointsTo.map(g=> GradePoints[g.grade])
// const gpa = Grades.reduce((sum,point) => sum+point, 0 )/ Grades.length
// console.log("GPA",gpa.toFixed(3))


// //DISCOUNT LIST
// const cart = [
//         {item:"Shirt", price: 1000},
//         {item:"Shoe", price:2000},
//         {item:"Jeans", price:3000}
// ];
// const discountCart = cart.map(product => ({
//         ...product,
//         price: product.price * 0.8
// })
// );
// console.log(discountCart);

// || -> or opperator examples
// const isRaining = false;
// const isSnowing = true;

// if(isRaining || isSnowing){
//         console.log("Take AN Umbrella")
// }

// const userName = ""
// const age = 20;
// if(userName || age){
//         console.log("MIssing Info")
// }

//For Each
const nums1 = [1,2.,3];
nums1.forEach(num=> console.log("forEach",num))
//Output become
//forEach 1
//forEach 2
 //forEach 3

 //Filters
 const evens = nums1.filter(num => num % 2 === 0);
 console.log("filters",evens);
 ////Output become 
 //filters [2]

 //Reduce
const sum = nums1.reduce((acc,curr)=> acc+curr,0)
console.log("reduce",sum);
//reduceRight
const reserveSum = nums1.reduceRight((acc,curr)=> acc+curr,0)
console.log("reduceRight:",reserveSum)

//Flat
const nested1 = [1, [2,3], [4,5,[6]]]
console.log("flat:", nested1.flat(2))
//Output: flat: (6) [1, 2, 3, 4, 5, 6]

//FlatMap
const flatMapped = nums1.flatMap(num => [num,num*2]);
console.log("FLatMapped:",flatMapped)

//SEARCHING AND TESTING
//FIND
const found = nums1.find(num => num >1)
console.log("Find:",found)

//FINDINDEX
const foundIndex = nums1.findIndex(num => num>1)
console.log("FindIndex:",foundIndex) // Findindex mean array er index search korche eta jeta 2 hbe seta 1 index ke show korche 

//IndexOf
const names = ["A","B","C"]
console.log("indexof:",names.indexOf("B")) //indexof: 1

//LastIndexOf
const nums2 = [1,2,3,2];
console.log("lastIndexof:",nums2.lastIndexOf(2)) //3

//Includes
console.log("includes:",nums2.includes(3)) //includes: true

//Every
console.log("Every:",  nums2.every(num => num>0));

//Some
console.log("Some:",nums1.some(num => num > 2))

//MODIFYING AND COPYING

//push
nums1.push(4)
console.log("Push:",nums1); //Push: (4) [1, 2, 3, 4]

//POP
nums1.pop();
console.log("pop:",nums1);

//SHIFT
nums1.shift()
console.log("Shift:",nums1)

//Unshift
nums1.unshift();
console.log("Unshift:",nums1)

// slice
const sliced = nums1.slice(1,3);
console.log("slice:", sliced);

//CopyWithin
const copyTest = [1,2,3,4,5,6];
copyTest.copyWithin(0,3);
console.log("CopyWithin:",copyTest)

//Fill
const filled = new Array(5).fill(7);
console.log("FIll:",filled);

// Utilities

// concat
const combined = nums1.concat([6, 7]);
console.log("concat:", combined);

// join
console.log("join:", nums1.join("-"));

// reverse
nums1.reverse();
console.log("reverse:", nums1);


// sort
nums1.sort((a, b) => a - b);
console.log("sort:", nums1);

// toString
console.log("toString:", nums1.toString());

// valueOf
console.log("valueOf:", nums1.valueOf());

// entries
const entries = nums1.entries();
for (const [index, value] of entries) {
  console.log(`entries: index=${index}, value=${value}`);
}

//CLASS
class person{
        constructor(name,age){
                this.name = name;
                this.age = age;
        }
        
        greet(){
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

        }
}
const name = prompt("Enter your name")
const age = prompt("Enter your age")
const person1 = new person ( name , age)
person1.greet();

class Calculator {
        add(a, b) {
          return a + b;
        }
      
        subtract(a, b) {
          return a - b;
        }
      
      Multiply (a,b){
        return a*b;
      }
      Divide (a,b){
        return a/b;
      }
}
      // Create an instance of Calculator
      const calc = new Calculator();
      
      // Take input from the user
      const num1 = parseFloat(prompt("Enter the first number:"));
      const num2 = parseFloat(prompt("Enter the second number:"));
      
      // Call methods and show result
      console.log("Addition:", calc.add(num1, num2));
      console.log("Subtraction:", calc.subtract(num1, num2));
      console.log("Multiply:", calc.Multiply(num1, num2));
      console.log("Dividation:", calc.Divide(num1, num2));