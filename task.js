//Three ways to create javascript object

// braces
var task1 = {};

//Object.Create
var task2 = Object.create(Object.prototype);

//new Object
var task3 = new Object();

console.log('Task1: %s\nTask2: %s\nTask3: %s',
    task1, task2, task3);