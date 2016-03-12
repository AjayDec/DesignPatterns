//Creational Patterns: Constructor Pattern, added prototype, as module
var repo = require('./taskRepository')

var Task = function (data) {
    this.name = data.name;
    this.completed = data.completed;
};

Task.prototype.complete = function () {
    console.log('Task completed: ' + this.name);
    this.completed = true;
};
Task.prototype.save = function () {
    console.log('Saving task: ' + this.name);
    repo.set(this);
};

module.exports = Task;