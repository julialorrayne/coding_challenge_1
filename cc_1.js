//Task 1: Variables
let employeeName = 'Josh';
const employeeID = 1234;
var isActive = true;

console.log(typeof employeeName);
console.log(typeof isActive);
console.log(typeof employeeID);

//Task 2: Primitive Data Types
let productName = 'pen';
const productPrice = 1.50;
var isAvailable = true;

console.log(typeof productName);
console.log(typeof employeeID);
console.log(typeof isAvailable);

//Task 3: Number Data Type
let accountBalance = 2000;

accountBalance += 1000; //addition
console.log(accountBalance);

accountBalance -=100; //subtraction
console.log(accountBalance);

accountBalance *=3; //multiplication
console.log(accountBalance);

accountBalance /=2; //division
console.log(accountBalance);

//Task 4: String Data Type
let customerName = 'Jaden';
let welcomeMessage = 'Welcome';
console.log(welcomeMessage.concat(',',' ',customerName,'!'));

//Task 5: Boolean Data Type
let isLoggedIn = true;
if (isLoggedIn = true){
    console.log('User is logged in');
}else {console.log('User is not logged in');
}