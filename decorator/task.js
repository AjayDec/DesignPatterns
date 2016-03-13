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
};

var myTask = new Task({
    name: 'legacy task'
});
myTask.complete();
myTask.save();

var urgentTask = new Task({
    name: 'Urgent Task'
});
urgentTask.priority = 'medium'; //decorate with additional attribute
urgentTask.notify = function () { //decorate with additional method
    console.log('notifying important people');

};
urgentTask.complete();
urgentTask.save = function () { //decorate via modifing existing function
    this.notify(); //new method
    Task.prototype.save.call(this); //call existing method
};

urgentTask.save();