"use strict"
// Home task / Video 1 (JavaScript Operators)
// №1
console.log('35' + - "22");
console.log(typeof '35' + - "22");
/* Не верно, два элемента являются строчного типа,
сначала выполниться унарный оператор, что переведет второй элемент 
числовой, а потом оператор сложения, но он не меняет тип на числовой и 
получается строка 35 + число 22 результат 35 - 22
 */

// №2
console.log('35' * "22");
// Верное оператор * переводит тип данных на числовой

// №3
//console.log('558' > 22++);
// Не верно, инкремент применяется к переменной
let test = 22;
test++;
console.log('558' > test);
// that returns true value


//№4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
console.log(typeof newUsers);
//Не верно, вернет 0 так как переменная newUsers принимает первоначалное значение usersCounter

//№5
console.log(!false && 11 || 18 && !'');
/* Не верно
Сначала выполниться ! потом && оба вернут тру и || оператор вернет первое тру 11
*/

//№6
let name = 0;
console.log(name ?? "No name");
// Верно, так как мы определили переменную она нам и вернет ее значение 

// Home task / Video 2 (JavaScript If Else conditional operators)
 
//№1
if (1 === '1') {
    console.log('True!');
} else {
    console.log('False!')
};

console.log(typeof 1 === '1');
// число 1 не равно строке 1, условие не выполняется (строгое равенство)

//№2
if (5 == "5") {
    console.log('True!');
} else {
    console.log('False!')
};
// Возвращает тру, потому что не строгое 
console.log(typeof 5 == '5');

//№3
let message = (92 > '11' && 58 < 100) ? 'True!' : 'False!';
console.log(message);
// Верно, вернет еру так как условие выполняется

//№4
if (0) {
    console.log('False!');
} else {
    console.log('True!');
};
// так как 0 вернет значение фолс то условие не выполниться по этому выведиться else

// Home task / Video 3 (JavaScript For While circles loop)

//№1
let firstOption = 0;
while (firstOption < 5) {
    console.log(firstOption);
    firstOption++;
};

let secondOption = 5;
do {
    console.log(secondOption);
    secondOption++;
} while (secondOption < 10);

for (let thrirdOption = 10; thrirdOption < 15; thrirdOption++){
    console.log(thrirdOption);
};

//№2
// let num = 8;
// while (num) {
//     console.log(num);
//     num--;
// };
// Не верно, так как 0 в булевом значении дает false, поэтому функция не будет выполняться и закончиться на 1

//№3
// for (let numb = 0; numb < 3; numb++) {
//     console.log(`Число: ${numb}`);
// };

//Переписать в while

// let numb = 0;
// while (numb < 3) {
//     console.log(`Число: ${numb}`);
//     numb++;
// };

//№4
for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (num == 1) break;
    };
};

// Home task / Video 4 (Numbers in JavaScript )
//№1
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne);
//Да, выведит 1 так это проблема не точных вычислений

//№2
// let value = "135.58px";
// value = parseFloat("135.58px");
// console.log(value); 

//№3
let value = 58 + "Freelancer";
if (value) {
    console.log(isNaN ( 58 + "Freelancer"));   
};

//№4
console.log(Math.max(10, 58, 39, -150.0));

//№5
let number = Math.floor(58.858);
console.log(number);

// Home task / Video 5 (Strings in JavaScript )
//№1
let fls = "freelancer";
let text = 'I\'m ${fls}';
console.log(text);
// Не верно, что бы вставить переменную нужнв обратные кавычки let text = `I\'m ${fls}`;

//№2
let phrase = 'freelancer';
let fourthSymbol = phrase[4];
console.log(fourthSymbol);

//№3
let nums = 123 + "456";
console.log(nums);
// Оператор сложения не переводит тип данных поэтому будет 123456

//№4
let text2 = "freelancer";
console.log(text2.toLocaleUpperCase());

//№5
console.log(phrase.includes('lan'));

let text3 = 'фрилансер';
console.log(text3.includes('лан', 4));


