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

//More complicated decorator
var UrgentTask = function (data) {
    Task.call(this, data);
    this.priority = data.priority;
};

UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function () { //decorate prototype with additional method
    console.log('notifying important people');

};
UrgentTask.prototype.save = function () { //decorate prototype via modifing existing method
    this.notify(); //new method
    console.log('Do something extra special');
    Task.prototype.save.call(this); //call existing method
};

var urgentTask = new UrgentTask({
    name: 'Urgent Task',
    priority: 'high'
});

urgentTask.complete();
urgentTask.save();