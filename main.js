var Task = require('./task.js');
var repo = require('./taskRepository')
var task1 = new Task(repo.get(1));
var task2 = new Task({
    name: 'This is a module task.'
});
var task3 = new Task({
    name: 'This is a singleton task.'
});
var task4 = new Task({
    name: 'This is a prototype task.'
});

task1.complete();
task2.save();
task3.save();
task4.save();