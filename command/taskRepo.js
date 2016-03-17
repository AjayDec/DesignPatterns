var repo = (function () {
    var tasks = {};
    var commands = [];
    var get = function (id) {
        console.log('Getting for db.. taskId: ' + id);
        if (tasks[id]) {
            return tasks[id];
        }
        return false;
    };

    var set = function (task) {
        tasks[task.id] = task;
        console.log('Saving task in db.. ' + task.name);
    };

    return {
        get: get,
        set: set,
        tasks: tasks,
        commands: commands
    };
})();

repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
    repo.commands.push({
        name: name,
        obj: args[0]
    });
    if (repo[name]) {
        return repo[name].apply(name, args);
    }
    return false;
};

repo.execute('get', 1);

repo.execute('set', {
    id: 1,
    name: 'Task 1',
    completed: false
});
repo.execute('set', {
    id: 2,
    name: 'Task 2',
    completed: false
});
repo.execute('set', {
    id: 3,
    name: 'Task 3',
    completed: false
});
repo.execute('set', {
    id: 4,
    name: 'Task 4',
    completed: false
});

console.log(repo.tasks);