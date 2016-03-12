var Task = require('./task.js');
var Repos = require('./repoFactory')
var task1 = new Task(Repos.task.get(1));
var task2 = new Task(Repos.task.get(2));
var project1 = Repos.project.get(1);
var user1 = Repos.user.get(1);

task1.project = project1;
task1.user = user1;

console.log(task1);
task1.save();