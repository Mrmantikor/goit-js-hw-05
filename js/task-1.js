// Задача 1. Пакування товарів
/* Task Сonditions
Виконуй це завдання у файлі task-1.js

*/

function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Hello ${name}!`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest('Mango', greet);
registerGuest('Mango', notify);
