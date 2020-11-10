// const add = function(...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);



// Приклад з вебінару

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Polly', online: true },
//   { name: 'Ajax', online: false },
// ];

// const findFriendByName = function(allFriends, name){

//   for (const friend of friends) {
//     console.log(friend.name);
  
//     if (friend.name === name){
//       return 'Знайшли друга !!!';
//     };
//   };

//   return 'Не знайшли :(';
// };


// const getAllNames = function(allFriends) {
//   const names = [];
//   for (const friend of friends){
//     names.push(friend.name);
//   };
//   return names;
// };

// // console.log(findFriendByName(friends, 'Polly'));

// console.log(getAllNames(friends));



// Додадкова задача
/* Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), 
которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
*/


// const salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// const sumSalaries = function(salaries){

//   const values = Object.values(salaries);

//   let sum = 0;

//   for (const value of values) {
//     sum += value;
//   }

//   return sum;
// };

// console.log(sumSalaries(salaries));