//Revealing module pattern [module is an Object literal, it contains set of related methods]

var repo = function () {
    var db = {};

    var get = function (id) {
        console.log('Getting for db.. taskId: ' + id);
        return {
            name: 'I am a task ' + id + ' from db'
        };
    };

    var set = function (task) {
        console.log('Saving task in db.. ' + task.name);
    }
    return {
        get: get,
        set: set
    }
};

module.exports = repo();