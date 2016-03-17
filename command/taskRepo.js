var repo = (function () {
    this.tasks = {};
    this.commands = [];
    var get = function (id) {
        console.log('Getting for db.. taskId: ' + id);
        if (this.tasks[id]) {
            return this.tasks[id];
        }
        return false;
    };

    var set = function (task) {
        this.tasks[task.id] = task;
        console.log('Saving task in db.. ' + task.name);
    };

    var replay = function () {
        for (var i = 0; i < this.commands.length; i++) {
            var command = this.commands[i];
            repo.executeNoLog(command.name, command.obj); // call this method to avoid infinte loop
        }
    };

    return {
        get: get,
        set: set,
        tasks: this.tasks,
        commands: this.commands,
        replay: replay
    };
})();

repo.executeNoLog = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (repo[name]) {
        return repo[name].apply(repo, args);
    }
    return false;
};

repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
    repo.commands.push({
        name: name,
        obj: args[0]
    });
    if (repo[name]) {
        return repo[name].apply(repo, args);
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

console.log('\n', repo.tasks);
repo.tasks = {};
console.log('\n', repo.tasks);
repo.replay();
console.log('\n', repo.tasks);