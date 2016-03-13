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

//create a TaskService Facade or wrapper

var TaskServiceFacade = function () {
    var completeAndNotify = function (task) {
        TaskService.complete(task);

        if (myTask.completed == true) {
            TaskService.setCompletedDate(task);
            TaskService.notify(task);
            TaskService.save(task);
        }
    };

    return {
        completeAndNotify: completeAndNotify
    };
}();

var myTask = new Task({
    name: 'My Task',
    priority: 1,
    project: 'My Project',
    user: 'Jay',
    completed: false
});

TaskServiceFacade.completeAndNotify(myTask);

console.log(myTask);