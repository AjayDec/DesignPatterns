var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

var TaskService = function () {

    return {
        complete: function (task) {
            task.completed = true;
            console.log('Completing task ' + task.name);
        },
        setCompletedDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notify: function (task, user) {
            console.log('Notifying user \'' + task.user +
                '\' of completed task ' + task.name);
        },
        save: function (task) {
            console.log('saving task ..' + task.name);
        }

    }
}();

var myTask = new Task({
    name: 'My Task',
    priority: 1,
    project: 'My Project',
    user: 'Jay',
    completed: false
});

TaskService.complete(myTask);

if (myTask.completed == true) {
    TaskService.setCompletedDate(myTask);
    TaskService.notify(myTask);
    TaskService.save(myTask);
}

console.log(myTask);