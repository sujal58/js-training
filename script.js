// var text=`"Jon's Diary"`;
// console.log(text);

// let x=10,y=10;
//  x=prompt("enter the value of x:");
//  y=prompt("enter the value of y:");
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);

// document.getElementById("checkme").onclick=function(){
// document.getElementById("presstext").innerHTML="";
// }


// let a= "mystry";
// let b= Symbol("This is a symbol");
// let c= true;
// let d= BigInt("0x1ffffffffffffff");
// let e= null;
// let f= 1232;
// let g;
// console.log(a,b,c,d,e,f,g);


// let personDetails={
//     firstname: "john",
//     address: "ABC",
//     phonrnumber:9800000000000
// }

// console.log(personDetails.firstname);

// let arrayDetails=["abc",12,true]
// console.log(arrayDetails);

// let currentDate= new Date();
// console.log(currentDate);

// let x=20,a;
// console.log(x);

// var y=20;
// console.log(y);

// const z=50;
// console.log(z);

// a=100;

// let someVar = "absc"
// if(someVar == "abc"){
//     console.log(true)
// }else {
//     console.log(false)
// }

// let result = (someVar === "abc" ? "OK" : "Not Ok")
// console.log(result)
// let ter=((x+y)>100)?true:false;
// console.log(ter);

// console.log(x+y+z);

// let student=
// {
//     Name:"sujal pandey",
//     class:"Bachelor",
//     faculty:"CSIT"
// }

// console.log(student);

// //Number
// let height=5;
// let weight=70;

// //string
// let Name = "Sujal";
// let course = "CSIT";


//conditional statement 
//if statement

/* let person_age = 30;
if (person_age = 30) {
    console.log("Adult")
} else {
    console.log("child")
}

let percentage = 50;
if (percentage >= 80) {
    console.log("distintion");
} else {
    if (percentage >= 70) {
        console.log("first");
    }

    else {
        console.log("second");
    }

}

if (percentage >= 80) {
    console.log("distintion");
}
else if (percentage >= 70 && percentage < 80) {
    console.log("first");

}
else {
    console.log("second");
}



let today_data = (new Date).getDay();
console.log(today_data);
switch (today_data) {
    case 0:
        console.log("sunday");
        break;

    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid");

}


let x = 20;
let y = 30;
let Operator = "+"
switch (Operator) {
    case "+":
        console.log(x + y);
        break;

    case "-":
        console.log(x - y);
        break;

    case "*":
        console.log(x * y);
        break;

    case "/":
        console.log(x / y);
        break;

    default:
        console.log("Enter a valid sign");
        break;
}



let today_data1 = (new Date).getMonth();
console.log(today_data1);
switch (today_data1) {
    case 0:
        console.log("januaury");
        break;

    case 1:
        console.log("February");
        break;

    case 2:
        console.log("March");
        break;

    case 3:
        console.log("April");
        break;

    case 4:
        console.log("May");
        break;

    case 5:
        console.log("June");
        break;

    case 6:
        console.log("July");
        break;

    case 7:
        console.log("August");
        break;

    case 8:
        console.log("September");
        break;

    case 9:
        console.log("October");
        break;

    case 10:
        console.log("November");
        break;


    case 11:
        console.log("December");
        break;

    default:
        console.log("Invalid");

}

*/



//type checking in switch statement

// let number_type = 5;
// switch (number_type) {
//     case 1:
//         console.log(`The value is number: ${number_type}`);
//         break;
//     case "1":
//         console.log(`The value is string: ${number_type}`);
//         break;

//     case 2:
//         console.log(`The value is number: ${number_type}`);
//         break;

//     case "2":
//         console.log(`The value is string: ${number_type}`);
//         break;

//     default:
//         console.log(`${number_type} is a invalid type`);
//         break;
// }


//switch with multiple case

// let fruit = "noodles";
// switch (fruit) {
//     case "Apple":
//     case "Banana":
//     case "Mango":
//     case "Pineapple":
//         console.log(`${fruit} is a fruit`);
//         break;

//     default:
//         console.log(`${fruit} is a not a fruit`);
//         break;
// }

//creating array

// arr1 = ["abc",1 ,true, null ,5.6];
// console.log(arr1);

//creating array using second method
// let arr2=[];
// arr2[0] = "Dell";
// arr2[1] = "Lenovo";
// arr2[2] = "Acer";
// console.log(arr2);

// //creating array using third method
// let arr3 = new Array("C", "C++", "PHP", "js");
// console.log(arr3);
// console.log("this type is:", typeof (arr3));
// console.log(Array.isArray(arr3));

// //accessing element of aarray
// console.log(arr3[0]);
// console.log(arr3[arr3.length-1]);

// arr2[3]="hello";
// console.log(arr2);


/* array methods


const arr2= ["Apple","Orange","mango","grapes"];
console.log(typeof arr2);
console.log(Array.isArray(arr2));
console.log(arr2);
arr2.push("mango");
console.log(arr2);
arr2.pop();
console.log(arr2);

//toString
const converted_data = arr2.toString();
console.log(converted_data);

//tojoin 
const join_data = arr2.join(",");
console.log(join_data);

//shift
arr2.shift();
console.log(arr2);
arr2.unshift("guava");
console.log(arr2);

//concat

// const arr3 = ["spiderman","hello","how"];
// const arr4 = arr3.concat(arr2);
// console.log(arr4);


let arr3 = [7,8,9];
let arr4 = [1,2,3];
let arr5 = [4,5,6];

let arr6=arr4.concat(arr5)
console.log(arr6);
let arr7 = arr6.concat(arr3);
console.log(arr7);


//splice data
const splice_data = ["bmw",'honda',"mercedes","audi","harleydavidson"];
splice_data.splice(3,1,"hero","xau");
console.log(splice_data);

//slice data
const slice_data = ["bmw",'honda',"mercedes","audi","harleydavidson"];
console.log(slice_data.slice(2,4)); 
console.log(slice_data.slice(1,4));

//reverse
console.log(slice_data.reverse());



sort

let sorts= [11,44,22,540,324]
sorted_data = sorts.sort(function (x,y) {return x-y;})

console.log(sorted_data);


*/
/*

let m1=50;
let m2=50;
let m3=50;
let m4=50;
let m5=50;
total=m1+m2+m3+m4+m5;
 let perc = (total/500)*100;
console.log(perc);

 switch (perc) {

    case (perc>79 && perc<=100):
        console.log("Distinction");
        break;

    case (perc>59 && perc<79):
        console.log("first division");
        break;

    case (perc>100):
        console.log("percentage is never greater than 100");
        break;

    default:
        console.log("you failed the exam");
        break;
}



if (perc>79 && perc<=100) {
    console.log("Distinction");
}

 else if(perc>59 && perc<79)
 {
    console.log("first division");
 }

 else if(perc>100)
 {
    console.log("percentage is never greater than 100");
 }

 else{
    console.log("you failed the exam");
 }


 //write a program to check which type of food is this

 const food="nuts";

 switch (food) {
    case (`${food}`):
        console.log("nuts is a cake");
        break;
    case "pizza":
        console.log("nuts is a pizza");
        break;

    case "ice-cream":
        console.log("nuts is an ice-cream");
        break;

    default:
        console.log("404");
        break;
 }


 //arithmetic operator
 const a=50,b=20;
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);

 //typeof

 let xyz=true;
 console.log(`xyz is a ${typeof (xyz)}`);

 let str="hello";
 console.log(`hello is a ${typeof (str)}`);

 let num=1;
 console.log(`1 is a ${typeof (num)}`);



 //cancat
 arr6=["1","2","3"];
 arr7=["4","5","6"];
 arr8=["7","8","9"];

 console.log(arr6=(arr6.concat(arr7)).concat(arr8));


 arr9=["a","b","c","d"];
 console.log(arr9.join("_"));


 console.log(arr9);

 let arr10=["abc","def","ghi","jkl","mno"]
 console.log(arr10);
 arr10.splice(2,1,"pqr")
 console.log(arr10);


 let newArray1=["abc","mno","ghi","jkl","xyz","def"];
 console.log(newArray1.sort());


 let newArray2=[12,454,3223,1];
 console.log(newArray2.sort((x,y)=>{return x-y}));

 //9
 let newArray3=["abc","def","ghi","jkl","mno"];
 
 console.log(newArray3.slice(1,4));


 //10
 cod=true;
 let x=10,y=5;
 let xx=(x>y)?"Good":"Bad";
 console.log(xx);

 */


/*
 //looping
for (let i=0; i<=10; i++ ) {
    console.log(i);
}


let sum = 0;
//let input_number=prompt("enter a number");
for (let i = 0; i <= input_number; i++) {
    sum += i;
}

console.log(`sum of a ${input_number} number is ${sum}`);



let person_detail = {
    john: 68,
    jane: 50,
    mike: 34
}

//syntax of for in loop
for (let a in person_detail) {
    //console.log("marks of " + a + "is: "+ person_detail[a]);
    console.log(`marks of ${a} is : ${person_detail[a]}`);
}

let person_obj = {
    fname: "dummy",
    age: 23,
    address: "abc_street"
}

let b = "";
for(a in person_obj)
{
    b += person_obj[a]+"  ";

}

 console.log(b);


 //constructor
function greeting(fname,lname){
  this.First_name = fname;
  this.Last_name = lname;
}


const greet1 = new greeting ("sujal","pandey");
console.log(greet1);


//factorial
let n=5;
let fact = 1;
for(let i = 1; i<=n; i++)
{
  fact *=i;
}
console.log(fact);


//printing pattern
for (let i = 1; i<=5; i++) 
{
    for (let j = 1; j<=i; j++) {
        document.write("*");
    }
    document.write("</br>");
}

for (let i = 1; i<=5; i++) 
{
    for (let k=1; k<=5-i; k++) {
        document.write("&nbsp;&nbsp;"); 
       
    }

    for (let j = 1; j<=i; j++) {
        document.write("*");
    }

   
    
    document.write("</br>");
}


//pyramid

for (let i = 4; i>=1; i--) 
{
    for(let k=1; k<=(4-i); k++){
        document.write("&nbsp;")
    }

    for (let j = 1; j<=(2*i-1); j++) {
        document.write("*");
    }

    document.write("</br>");
}

document.write("</br>");
document.write("</br>");

for (let i = 6; i>=1; i--) 
{
    for(let k=1; k<=(6-i); k++){
        document.write("&nbsp;")
    }

    for (let j = 1; j<=(2*i-1); j++) {
        document.write("*");
    }

    document.write("</br>");
}



//printing number pattern
for (let i = 1; i<=5; i++) 
{
    for (let j = 1; j<=i; j++) {
        let num=0;
        num += j;
        document.write(num);
    }
    document.write("</br>");

    
}




//fibonacci series
const num1 = 10;
//parseInt(prompt("Enter a number of fibonacci:"));
let n1=0, n2=1, next;

for (let i = 0; i<num1; i++) {
    console.log(n1);
    next=n1+n2;
    n1=n2;
    n2=next;
}




//combine two pyramid

for (let i = 6; i>=1; i--) 
{
    for(let k=1; k<=(6-i); k++){
        document.write("&nbsp;")
    }

    for (let j = 1; j<=(2*i-1); j++) {
        document.write("*");
    }

    document.write("</br>");
}

for (let i = 2; i<=6; i++) 
{
    for(let k=1; k<=(6-i); k++){
        document.write("&nbsp;")
    }

    for (let j = 1; j<=(2*i-1); j++) {
        document.write("*");
    }

    document.write("</br>");
}

//combining two triangle

for (let i = 1; i<=6; i++) 
{
    for (let k=1; k<=6-i; k++) {
        document.write("&nbsp;&nbsp;"); 
       
    }

    for (let j = 1; j<=i; j++) {
        document.write("1");
    }

   
    
    document.write("</br>");
}


for (let i = 6; i>=1; i--) 
{
    for (let k=1; k<=6-i; k++) {
        document.write("&nbsp;&nbsp;"); 
       
    }

    for (let j = 1; j<=i; j++) {
        document.write("1");
    }

    document.write("</br>");
}



for (let i = 1; i < 10; i++) {
    for(let j=1; j<=i; j++)
    {
      document.write(j);
    }
    document.write("</br>");
}

for(let i=10; i>1; i--)
{
    for(let j=1; j<i-1; j++)
    {
        document.write(j);
    }
    document.write("</br>");
}



//js function



function average_num() {
    let a=parseInt(prompt("euta van"))
    let b=parseInt(prompt("arko van"))
    let c=parseInt(prompt("ajhai euta van"))
    let avg= a+b+c
    console.log("The average of three num is",avg/3);
}

average_num();



function calculateaverage(a,b)
{
    let result = (a+b)/2;
    return result;
}

let averagenum=calculateaverage(5,5);
console.log(averagenum);




function greeting(name)
{
    console.log(`Hello ${name}! How are you?`);
}

greeting("Ram");




//recursion

function countdown(num)
{
    console.log(num);
    let newnum=num-1;
    if(newnum>0)
    {
        countdown(newnum);
    }
}

countdown(10);

//factorial using recursion

function recursion(n)
{
    let f=1;
    if (n==0) {
        return 1;
    }else{
        return n * recursion(n-1);
    }
}

let fact=recursion(5);
console.log(fact);



//loops in array

const arr1 = ["Ram","Shyam","Hari","Mohan","Ramu"];

// for( let i=0; i<=arr1.length; i++)
// {
//     console.log(arr1[i]);
// }


//forEach

const details = (value, index, array) => {
    console.log(`The value is ${value}`);
    console.log(`Index of ${value} is ${index}`);
    console.log(array);
}
arr1.forEach(details)

const detials = arr1.forEach((value,index) =>
{
    console.log(`${index}: ${value}`);
})

//maping
const numarry1 = [2,54,7,18,12,7,35,55,25,20];
let map_result = numarry1.map((value,index) => {
    return value * 3;
})



console.log(map_result.sort((x,y)=>{
    return y-x;
}));


//

const filtereddata= numarry1.filter((value) => {
    return value>10;
})

console.log(filtereddata);


//filter EXample

const movie_details = [
    {
        movieName: "Avatar",
        releaseDate:2000,
        movieDescription: "Avatar Movie"
    },
    {
        movieName: "Interstellar",
        releaseDate:1998,
        movieDescription: "Interstellar Movie",
        previousMovie : function(){
            
        }
    },
    {
        movieName: "Joker",
        releaseDate:2012,
        movieDescription: "Joker Movie"
    },
    {
        movieName: "Interstellar",
        releaseDate:1998,
        movieDescription: "Interstellar Movie"
    },
    {
        movieName: "Avatar",
        releaseDate:2000,
        movieDescription: "Avatar Movie"

    }
]

const filter_movie_date = movie_details.filter((value)=>{
   return value.releaseDate >= 2000 ;
})

console.log(filter_movie_date);



//
const statusDetails = [
    {
        name: "abc",
        status: true
    },
    {
        name: "def",
        status: false
    },
    {
        name: "ghi",
        status: false
    },
    {
        name: "jkl",
        status: false
    },
    {
        name: "mno",
        status: true
    },
    {
        name: "pqr",
        status: true
    },
]

let statusdetails = statusDetails.filter((value) => {
    return value.status==1;
})

console.log(statusdetails);

// reduce
const numarry2 = [2,5,4,6,4,10]
const reduce_result = numarry2.reduce((totalvalue, currrentvalue) => {
    return totalvalue + currrentvalue;
})

console.log(reduce_result);

//


//check
arr1.forEach((value,index) => {
    console.log(`${index}: ${value}`);
})


//
const everycheck = numarry2.every((value) => {
    return value>=5;
})

console.log(everycheck);

//

const somecheck = numarry2.some((value)=>{
    return value>=10;
})

console.log(somecheck);

//const arr1 = ["Ram","Shyam","Hari","Mohan","Ramu"];
const indexofcheck = arr1.indexOf("Mohan", 3)
console.log(indexofcheck);


const arr2 = ["Ram","Shyam","Hari","Mohan","Ramu","Ram"];
console.log(arr2.lastIndexOf("Hari", 2));

//find()

const find_numbers = [12, 45, 77, 76];
const find_numbers_output = find_numbers.find((value) => {
    return value>33
})

console.log(find_numbers_output);

//important looping in array
// 1. for
// 2. forEach
// 3. filter
// 4. map
// 5. reduce


const filterNumber = [10, 2000, undefined, 5000, 3500, undefined, 1200, undefined, 3000]

const Filter_Number = filterNumber.filter((value) => {
    return value>=3000 && value!==undefined;
})

console.log(Filter_Number);


console.log(Filter_Number.sort((x,y) => {
    return y-x;
}));


let people = [
    {
        name: "Aaron",
        age: 15
    },
    {
        name: "both",
        age: 13
    },
    {
        name: "care",
        age: 3
    },
    {
        name: "daniel",
        age: 25
    },
    {
        name: "fin",
        age: 16
    },
    {
        name: "george",
        age: 18
    }
]

let range = {
    lower: 13,
    upper: 16
}

let rangedata= people.filter((value) =>{
     return value.age>=range.lower && value.age<=range.upper
})

console.log(rangedata); 

rangedata.forEach((value) => {
    console.log(`The person name is ${value.name} and age is ${value.age} `);
})




//constructor function changed to class new es6 feature
//class syntax
//parent class
class Emailer {
    constructor(sendTo, sentfrom, message, subject) {
        this.receiver = sendTo; //this points the newly created object
        this.sender = sentfrom;
        this.message = message;
        this.subject = subject;
        //this.send    = function() {
        // return this.message + ' was sent to ' + this.receiver + ' succesfully!';
        //}
    }
    //prototype property 
    //arrow function ma this le kam grdaina
    //prototype is a property which holds objects as a value
    send() {
        return this.message + ' was sent to ' + this.receiver + ' succesfully!';
    }
}

//child class
//advanced features of Email 
class advanceEmailer extends Emailer {
    constructor(sendTo, sentFrom, message, subject, file, location){
        //parent class handling passing 4 parameter
        super(sendTo, sentFrom, message, subject);

        //extra feature handling
        this.file     = file;
        this.location = location;
    }


    //advanceEMailer ma method create garey yesle overcome grxa else parent class ko run hunx.
    send(){
        return this.file + ' -was sent from ' + this.location + '!!';
    }
}

const firstmessage = new Emailer('pandey@gmail.com', 
'sujal@gmail.com',
'how are you?', 
'Greeting');

console.log(firstmessage);
console.log(firstmessage.send());


const secondmessage = new Emailer('hello@email.com', 'hey@email.com',
'Hey how\'re you bro', 'Hello message');

console.log(secondmessage);
console.log(secondmessage.send());

const advmessage = new advanceEmailer('sujal@gmail.com', 'pandey@gmail.com', 'Hello Gentleman. How\'re you?',
'First message', 'image.jpg', 'Butwal,Nepal' );

console.log(advmessage);
console.log(advmessage.send());




//DOM(Document Object Model)
const h1=document.querySelector("h1");
//h1.innerHTML = '<a href="#">Click Here</a>'
console.log(h1);

//we changed the text content of h1 element
//h1.textContent = 'Learning DOM is bad';


//we changed the style of the html element(h1 in this case)
//h1.style = 'color: green; text-align: center; background-color: lightblue'


//more into styling
h1.style.color = 'red';
h1.style.backgroundcolor= 'skyblue';


//queryselectorall
//selects multiple elements 
const paratext = document.querySelectorAll(".para");
paratext[1].style.color = 'green';


//getElementById/






//break and continue
for(let i=0; i <= 10; i++)
{
    if (i===5)
    {
        //document.write("The number is : ", i, "<br>");
        break;
    }

    document.write("After : ", i, "<br>")
}


let city = {
    id: 5542,
    name: "butwal",
    zip_code: 33015,
    population: 800000
}

//document.write(`The city name is ${city.name} and zip code is ${city.zip_code}`);

let persondetails = 
[
 {
    firstname: 'sujal',
    age: 21,
    address: "sunwal",
 },

 {
    firstname: "Bimal",
    age: 21,
    address: "butwal",
 },

 {
    firstname: "madhav",
    age: 20,
    address: "belbas",
 },

 {
    firstname: "aayush",
    age: 20,
    address: "murgiya",
 }

]

let helloobject = persondetails.forEach((value) => {
    document.write(`The name of a person is: ${value.firstname} <br> The name of address is: ${value.address} <br> The age of person is: ${value.age} `);
    document.write("<hr>")
});

document.write(new Date())


var library = 
[
    {
        title: "the Road Ahead",
        author: "Bill gates",
        libraryId: 1234
    },

    {
        title: "walter Isaacson",
        author: "steve jobs",
        libraryId: 4264
    },

    {
        title: "Brief of History if Time",
        author: "Stephen Hawking",
        libraryId: 9871
    },

    {
        title: "Mackimgy: The final book of hunger games",
        author: "Suzamne collins",
        libraryId: 3245
    }
]

let sortinglibrary = library.sort((x,y) => {
    return x.libraryId -y.libraryId;
})

console.log(sortinglibrary);




class Rectangle
{
    constructor()
    {
        this.length = prompt("enter length");
        this.breadth = prompt("enter breadth");
        // this.area = function()
        // {
        //     return (this.length*this.breadth);
        // }
    }

    area()
    {
        return this.length*this.breadth;
    }



}

let area1 = new Rectangle();

console.log(area1.area());



//asynchronous
    
setTimeout(() => {
    console.log("oee 2 sec ma khul hai");
    setTimeout(() => {
        console.log("tyo khuleko 2 sec ma khul ni");
        setTimeout(() => {
            console.log("ta  yei sngai khules ni");
            setTimeout(() => {
               console.log(" ta shima thyasni last ma khul");
            }, 5000);
        }, 1000);
    }, 2000);
}, 2000);

setTimeout(() => {
    console.log("khul yr aurlai xod");
}, 3000);



//callback

function display(text) {
    console.log(text)
}

function first()
{
    display("haha malai khojeko bhai???");
}

function second() {
    display("ma navai vayena talai??");
}

first();
second();


//
function displayresult(res)
{
    console.log(res);
}

function functionone(num1, num2, callbackfunction)
{
    let sum = num1 + num2;
    callbackfunction(sum);
}

functionone(10, 4, display);


function submitFunc(){
    alert("The data is submitted");

}

// document.getElementById("subbtn").onclick = function (){
// }






for (let i = 0; i < 5; i++) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    ul.append(li);
    li.setAttribute("class", "newitem");
    let items = ["1","2","3","4","5"]
    li.innerHTML = items[i];
}

  //difference between innerhtml and innertext

  const items = document.getElementById("heading")
    items.innerText = '<a href="#"> code </a>';
    items.innerHTML =  '<a href="#"> code </a>';


let n = 12;

 let num = new Promise((resolve,reject) => {
    if(n%2==0){
        resolve("success");
    }

    else{
        reject("failed");
    }
})



//event listner
//element.addEventlistner("action", function)
//where action = onclick,onmouseover,ondblclick



const showdata = document.querySelector(".btn-2");

function showmessage(){
    alert("1 choti ma ayis");
 } 

showdata.addEventListener("click", showmessage);

function average()
{
    let x=3;
    let y=3;
    let z=3;
    let average = (x+y+z)/3;
    alert(`${average}`);
}

 //document.querySelector(".btn-3").addEventListener("mouseover", average);




 let showbtn = document.querySelector(".showmorebtn");
 let data = document.querySelector(".hidden-content");

 function showpara() {
    if (showbtn.innerHTML==="show more")
    {
    showbtn.innerHTML = "show less";
    data.style.display="block";
    }
    else{
        showbtn.innerHTML = "show more"
        data.style.display="none";
    }
}

 showbtn.addEventListener("click", showpara)

//image hide and show

let showimg = document.querySelector(".show-image");
let hideimg = document.querySelector(".hide-image");
let imgdata = document.querySelector(".image-details");

function showimage()
{
    if(imgdata.classList.contains("image-details"))
    {
        imgdata.classList.add("show");
    }

}
 
 showimg.addEventListener("click", showimage);

 function hideimage()
{
    if(imgdata.classList.contains("image-details"))
    {
        imgdata.classList.remove("show");
    }

}
 
showimg.addEventListener("click", hideimage);


 


class Animal
{
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
    }

    shout()
    {
        console.log(`${this.name} is shouting.`);
    }
}

class monkey extends Animal{
    details()
    {
        console.log(`The name of monkey is ${this.name}`);
        console.log(`The color of monkey is ${this.color}`);
    }
}


let animal1 = new Animal("Tiger");
let monkey1 = new monkey("Brune ", "Brown");

animal1.shout();
monkey1.details();






class parent
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;

    }

    getDetails()
    {
        console.log(`Name is: ${this.name}`);
        console.log(`Age is: ${this.age}`);

    }
}

class Child extends parent
{
     constructor(name, age, faculty)
    {
        super(name, age);
        this.faculty = faculty;

    }

    getDetails()
    {
        super.getDetails();
        // console.log(`Name is: ${this.name}`);
        // console.log(`Age is: ${this.age}`);
        console.log(`Facculty is: ${this.faculty}`);

    }
}

let child1 = new Child("ABC", 24, "CSIT");
child1.getDetails();


*/


class Account
{
    constructor(acc_no, balance, min_balance)
    {
        this.acc_no = acc_no;
        this.balance = balance;
        this.min_balance = min_balance
    }

    displayData()
    {
        console.log(`Account Number: ${this.acc_no}`);
        console.log(`Account Balance: ${this.balance}`);
        console.log(`Account min_balance: ${this.min_balance}`);
    }

    display_min_balance()
    {
        console.log(`Account min_balance: ${this.min_balance}`);

    }

}

let data = [];
let acc1 = new Account(991199, 1000000, 1000)
let acc2 = new Account(991199, 1000000, 1000)
let acc3 = new Account(991199, 1000000, 1000)
let acc4 = new Account(991199, 1000000, 1000)
let acc5 = new Account(991199, 1000000, 1000)

data.push(acc1, acc2, acc3,acc4,acc5)
console.log(data)

data.forEach((value)=>{
    value.displayData();
    value.display_min_balance();
})




class Teacher
{
    constructor(t_id, subject)
    {
        this.t_id = t_id;
        this.subject = subject
    }

    displaydata1()
    {
        
    }
}

class staff extends Teacher
{
    constructor(t_id, subject, s_id, position)
    {
        super(t_id,subject);
        this.s_id = s_id;
        this.positon = position;
    }
}

class Coordinator extends staff
{
    
    constructor(t_id, subject, s_id,position, department)
    {
        super(t_id, subject, s_id, position);
        this.department = department;
    }


    displaydata()
    {
        console.log(`Teacher ID: ${this.t_id}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Staff ID: ${this.s_id}`);
        console.log(`Position: ${this.position}`);
        console.log(`Department: ${this.department}`);
    }
}




let c1 = new Coordinator(1, "CSIT", 01,"1st", "SCIENCE");
let c2 = new Coordinator(2, "PHYSICS", 02, "2nd", "science");
console.log(c2);