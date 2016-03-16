var Task = require('./task.js');

var task1 = new Task({
    name: 'A demo for constructor',
    user: 'jay'
});

task1.complete();
task1.save();