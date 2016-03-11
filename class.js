//Class in ECMA2015
'use strict'
class Task {
    constructor(name) {
        this.name = name;
        this.complete = false;
    }
    complete() {
        console.log('Task completed: ' + this.name);
        this.completed = true;
    }
    save() {
        console.log('Saving task: ' + this.name);
    }
}

var task1 = new Task('This is a constructor task.');
var task2 = new Task('This is a module task.');
var task3 = new Task('This is a singleton task.');
var task4 = new Task('This is a prototype task.');
console.log(task1);
task2.save();
task3.save();
task4.save();