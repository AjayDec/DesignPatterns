//Creational Patterns: Constructor Pattern, added prototype

var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('Task completed: ' + this.name);
    this.completed = true;
};
Task.prototype.save = function () {
    console.log('Saving task: ' + this.name);
};
var task1 = new Task('This is a constructor task.');
var task2 = new Task('This is a module task.');
var task3 = new Task('This is a singleton task.');
var task4 = new Task('This is a prototype task.');

task1.complete();
task2.save();
task3.save();
task4.save();