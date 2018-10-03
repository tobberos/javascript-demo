//Primitiva typer (datatyper)

//1. String
let firstName = "Tobias";
let lastName = 'Rosenlind';
console.log(firstName,lastName);
console.log("Hej");
console.log('Tjaa');

//2.Number
let age = 45;
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);

//3. Boolean (true or false)
let again = false; //eller 0
if(again)
console.log("Inne i if satsen");
again = true;
if(again)
console.log("Inne i if satsen");

//4. Undefiend (OBS! Detta är en typ i JS)

let name;
console.log(name);

console.log(mobile); //OK eftersom har mobile har deklarerats med var
var mobile;
mobile = "073-1234567";

let adress;
adress = "Hemfridsvägen 17";
console.log(adress); //EJ OK om den läggs innan variabeln deklarerats.

let name1 = "tobias";
let age1 = 45;
let sant = true;
let jaha;
let inget = null;
console.log(typeof name1);
console.log(typeof age1);
console.log(typeof sant);
console.log(typeof jaha);
console.log(typeof inget);