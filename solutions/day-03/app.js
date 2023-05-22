//1
const firstName = 'Diana';
const lastName = 'Grzelak';
const country = 'Romania';
const city = 'Iasi';
const age = 24;
const isMarried = true;
const year = 2022;

console.log(typeof (firstName),
        typeof (lastName),
        typeof (country),
        typeof (city),
        typeof (age),
        typeof (isMarried),
        typeof (year)
);

//2
console.log(typeof ('10') == typeof (10));

//3
console.log(parseInt('9.8') == typeof (10));

//4
console.log(4 < 5);
console.log(undefined == null);
console.log('10' !== 10);

console.log('diana'.length == 'grzelak'.length);
console.log(4 > 5 || 7 > 8);
console.log(1 === true);

//5
console.log('//////////////////////')
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false 
console.log(4 == '4'); //true
console.log(4 === '4'); //false

console.log('python'.length != 'jargon'.length);

//6
console.log('//////////////////////')
console.log(4 > 3 && 10 < 12)  //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true


console.log(!('dragon'.includes('on') && 'python'.includes('on'))) //false

//7
console.log('//////////////////////')
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Date.now());

//2.1

const base = prompt('Enter base');
const h=prompt('Enter height');
console.log(`The area of the triangle is ${0.5 * base * h}`);

//2.2

const a = prompt('Enter side a:');
const b = prompt('Enter side b:');
const c = prompt('Enter side c:');
const p = parseInt(a)+parseInt(b)+parseInt(c)
console.log(`The perimeter of the triangle is ${p}`);


//2.10

const yourName = prompt('Enter your name:');
yourName.length > 7 ? console.log('your name is long') : console.log('your name is short');

//2.11
firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`)
    : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}.`);

//2.13

const birthYear = prompt('enter your birth year:');
const yourAge = now.getFullYear() - birthYear
const yearsLeft = 18 - yourAge;
yourAge > 18 ? console.log(`You are ${yourAge}. You are old enough to drive`)
    : console.log(`You are ${yourAge}. You will be allowed to drive in ${yearsLeft} year/years`);


//2.15
console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);