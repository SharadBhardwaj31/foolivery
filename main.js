// const changeText =document.getElementById("myh1");
// // console.log(myh1);

// changeText.addEventListener("click",function(){
//     changeText.innerText="Hey! I am Sharad"
// })

// const changeButton=document.getElementById("btn");

// function update(){
//     changeButton.innerText="Done"
// }

// changeButton.addEventListener("dblclick",update)


// const myArrow=()=>{
//     console.log(1234);
// }

// myArrow();

// const myArrow2=()=>console.log(12345678);

// myArrow2();

// const myArray=[1,2,3,4,5,6,7,8,9,0]
// myArray.push(11); // add element to last index
// myArray.unshift(22); // add element to first index
// myArray.pop(); // remove last element from an Array
// myArray.shift(); //remove first element from an Array

// const newArray = myArray.slice(0,5); // return new array from given index
// myArray.splice(6,8);

// console.log(myArray);
// console.log(newArray);

// function thisFunction(name,func){
//     console.log(name);
//     func();
// }

// function anotherFunction(){
//     console.log("iside- function");
// }

// thisFunction("Rahul",anotherFunction);

// const myFunction = function(num1,num2){
//     let result = num1 + num2;
//     return result;
// }
// console.log(myFunction(15,25));


// const myArray = [
//     "Ferrari LaFerrari", "Lamborghini Aventador", "McLaren P1", "Porsche 911 Turbo", "Bugatti Chiron",
//     "Aston Martin DB11", "Chevrolet Corvette Z06", "Nissan GT-R", "Ford GT", "Dodge Viper",
//     "Rolls-Royce Phantom", "Bentley Continental GT", "Mercedes-Benz S-Class", "BMW 7 Series", "Audi A8",
//     "Lexus LS", "Maserati Quattroporte", "Jaguar XJ", "Genesis G90", "Cadillac CT6",
//     "Toyota Camry", "Honda Accord", "Hyundai Sonata", "Nissan Altima", "Volkswagen Passat",
//     "Tesla Model S", "BMW 3 Series", "Mercedes-Benz C-Class", "Audi A4", "Subaru Legacy",
//     "Jeep Grand Cherokee", "Ford Explorer", "Chevrolet Tahoe", "Toyota RAV4", "Honda CR-V",
//     "Nissan Rogue", "BMW X5", "Mercedes-Benz GLE", "Audi Q7", "Land Rover Range Rover",
//     "Ford F-150", "Chevrolet Silverado", "Ram 1500", "Toyota Tacoma", "Nissan Frontier",
//     "GMC Sierra", "Honda Ridgeline", "Jeep Gladiator", "Ford Ranger", "Tesla Cybertruck"
// ];

// for(let i=0;i<myArray.length;i++){
// console.log("Array value at -",i,":",myArray[i]);
// }

// myArray.map(function (item) {
//     console.log(item);
// });

// const newArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//     11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//     21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//     31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50
//   ];
// const mapped = newArray.map(element=> element + 50);
// console.log(mapped);

// newArray.forEach(function(item){
//     console.log(item)
// }) ;

// const filtered = newArray.filter(element => element===46||element===37);
// console.log(filtered);
    
// console.log(newArray.concat(myArray));

 //const arr=[0,1,2,3,4,5,6,7];
// const greaterFive = arr.every(num => num > 5);
// console.log(greaterFive);

// console.log(arr.includes(4));
// console.log(arr.includes(8));

//console.log(arr.join(""));

// const found = arr.find(element => element>5);
// console.log(found);

// const arr2 = ["Rohan","Vikas","Rahul","Mohit"];
// const indexFinder= arr2.indexOf("Vikas");
// console.log(indexFinder);

 //const arr3=[1,2,3,4,5,6,7,8,9];
// const indexFinder=arr3.lastIndexOf(5);
// console.log(indexFinder);

// console.log(arr3.push(22));

// console.log(arr3.pop(22));

// console.log(arr3.shift(1));

// console.log(arr3.unshift(9));

// const demo={
//     name : "Sharad Bhardwaj",
//     age : 20,
//     email : "sharadbhardwaj5922@gmail.com",
//     country : "India",
//     address : {
//         Vill :"That Jat" , 
//         District : "Bijnor",
//         State : "Uttar Pradesh",
//     },
//     contactInfo : {
//     phone : "67985335678",
//     }
// };

// const{
//     name,
//      age,
//      email ,
//      country,
//      address,
//      Vill,
//      District,
//      State,
//      contactInfo,
//      phone} = demo;

//      console.log(address);


// const bag ={
//     color : "black",
//     capacity : "25 litres",
//     cost  : "$50",
//     showInfo : function() {
//         return console.log(
//             `This is a ${this.color} bag , its capacity is of ${this.capacity} and its cost is ${this.cost}`
//         );
//     },
//     showThis :  function () {
//         console.log(this);
//     },
// };
// bag.showInfo();

// const mystr = `This method adds one or more elements to the end of array and returns the new length of the array`;

// console.log(mystr.toLowerCase());
// console.log(mystr.toUpperCase());
// console.log(mystr.charAt(7));
// console.log(mystr.slice(0,5));
// console.log(mystr.replace("one","two"));
// console.log(mystr.length);
// const newStr = mystr.split(" ");
// console.log(newStr);
// console.log(mystr.indexOf("end"));
// console.log(mystr.lastIndexOf("end"));