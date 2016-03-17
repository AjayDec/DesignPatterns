var repo = (function () {
    var get = function (id) {
        console.log('Getting for db.. taskId: ' + id);
        return {
            name: 'I am a task ' + id + ' from db'
        };
    };

    var set = function (task) {
        console.log('Saving task in db.. ' + task.name);
    };
    return {
        get: get,
        set: set
    };
})();

repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
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