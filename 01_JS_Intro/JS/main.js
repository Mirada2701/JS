//1
let username = prompt("Enter your name:");
alert(`Hello, ${username}!`)
//2
let date = prompt("Enter year of birth:");
const age = 2024 - date;
alert(`Age: ${age}`);
//3
let length = prompt("Enter side square:");
alert(`Length square = ${length * 4}`);
//4
let radius = prompt("Enter radius circle:");
alert(`Area circle = ${3.14 * Math.pow(radius,2)}`);
//5
let distance = prompt("Enter distance between 2 cities:")
let time = prompt("Enter hours:");
alert(`Speed = ${distance/time} km/h`);
//6
let dollars = prompt("Enter amount:");
const course = 0.9;
alert(`You recieve: ${dollars * course}`);
7
let space = prompt("Enter memory space:");
const file = 820;
alert(`${space * 1000 / file}`);
//8
let num = +prompt("Enter number [0 - 9]:");
switch (num) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
        case 3:
        alert("#");
        break;
        case 4:
        alert("$");
        break;
        case 5:
        alert("%");
        break;
        case 6:
        alert("^");
        break;
        case 7:
        alert("&");
        break;
        case 8:
        alert("*");
        break;
        case 9:
        alert("(");
        break;
    default:
        alert("Wrong number!!!");
        break;
}
//9
let intercalary = prompt("Enter year:");
let flag = intercalary % 4 == 0? true : false;
if (flag) {
    if (intercalary % 100 == 0 && intercalary % 400 != 0)
        alert("Not Intercalary");
    else
        alert("Intercalary");
}
else{
    alert("Not Intercalary");
}
//10
let date1 = +prompt("Enter day:");
let date2 = +prompt("Enter month:");
let date3 = +prompt("Enter year:");

let day1 = 0;
let flag1 = date3 % 4 == 0? true : false;
if (flag1)
    {
        if (date3 % 100 == 0 && date3 % 400 != 0)
        {
            flag1 = false;
            day1 = 28;
        }
        else
        {
            flag1 = true;
            day1 = 29;
        }            
    }
else{
   flag1 = false;
   day1 = 28;
}

if(flag1 == true && date2 == 2 && date1 >= day1)
{
    date1 = 1;
    date2 = 3;
}

if(date1 >= 31)
{
    date1 = 1;
    date2+=1;
}
else
{
    date1+=1;
}
if(date2 >= 12)
{
    date3+=1;
    date2 = 1
}
alert(`${date1}.${date2}.${date3}`);
//11
let arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let like = true;
for (let i = 0; like == true; i++) {
    like = confirm(`${arr[i]}. Do you like to see next day?`);    
    if(i == 6)
        i = -1;
}
